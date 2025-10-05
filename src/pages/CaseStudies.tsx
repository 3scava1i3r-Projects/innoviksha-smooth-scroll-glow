import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import * as THREE from "three";
import gsap from "gsap";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    client: "Fashion Forward",
    category: "Web Design & Development",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    client: "SecureBank",
    category: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Healthcare Management System",
    client: "MediCare Solutions",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "AI-Powered Analytics Dashboard",
    client: "DataTech Corp",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Social Learning Platform",
    client: "EduConnect",
    category: "EdTech Platform",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Smart Home IoT Dashboard",
    client: "HomeAutomation Pro",
    category: "IoT Application",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

const vertexShader = `
uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;

varying vec2 vUv;

uniform vec2 uMeshSize;
uniform vec2 uMediaSize;
uniform vec2 uOffset;
uniform float uOpacity;
uniform float uMouseEnter;
uniform float uMouseEnterMask;

const float PI = 3.14159265359;

vec2 scale(in vec2 st, in vec2 s, in vec2 center) {
    return (st - center) * s + center;
}

float saturate(float a) {
    return clamp(a, 0., 1.);
}

vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
    position.x = position.x + (sin(uv.y * PI) * offset.x);
    position.y = position.y + (sin(uv.x * PI) * offset.y);
    return position;
}

vec2 getUVScale() {
    float d = length(uMeshSize);
    float longEdge = max(uMeshSize.x, uMeshSize.y);
    float dRatio = d / longEdge;
    float mRatio = uMeshSize.x / uMeshSize.y;
    return vec2(mRatio / dRatio);
}

float getProgress(float activation, float latestStart, float progress, float progressLimit) {
    float startAt = activation * latestStart;
    float pr = smoothstep(startAt, 1., progress);
    float p = min(saturate(pr / progressLimit), saturate((1. - pr) / (1. - progressLimit)));
    return p;
}

vec3 distort(vec3 p) {
    vec2 uvDistortion = uv;
    vec2 uvScale = getUVScale();
    uvDistortion = scale(uvDistortion, uvScale, vec2(.5));
    uvDistortion = (uvDistortion - .5) * 2.;
    float d = length(uvDistortion);
    float pr = getProgress(d, .8, uMouseEnter, .75) * .08;
    p.xy *= (1. + pr);
    return p;
}

void main() {
    vec3 p = position;
    p = deformationCurve(p, uv, uOffset);
    p = distort(p);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.);
    
    vUv = uv;
}
`;

const fragmentShader = `
uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;

varying vec2 vUv;

uniform sampler2D iChannel0;

uniform vec2 uMeshSize;
uniform vec2 uMediaSize;
uniform vec2 uOffset;
uniform float uOpacity;
uniform float uMouseEnter;
uniform float uMouseEnterMask;

vec2 cover(vec2 s, vec2 i, vec2 uv) {
    float rs = s.x / s.y;
    float ri = i.x / i.y;
    vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
    vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2., 0.) : vec2(0., (new.y - s.y) / 2.)) / new;
    uv = uv * s / new + offset;
    return uv;
}

vec2 scale(in vec2 st, in vec2 s, in vec2 center) {
    return (st - center) * s + center;
}

vec2 ratio2(in vec2 v, in vec2 s) {
    return mix(vec2(v.x, v.y * (s.y / s.x)),
    vec2((v.x * s.x / s.y), v.y),
    step(s.x, s.y));
}

vec2 distort(vec2 uv) {
    uv -= .5;
    
    float mRatio = uMeshSize.x / uMeshSize.y;
    
    float pUvX = pow(uv.x * mRatio, 2.);
    float pUvY = pow(uv.y, 2.);
    float pSum = pUvX + pUvY;
    float multiplier = 10. * (1. - uMouseEnter);
    float strength = 1. - multiplier * pSum;
    uv *= strength;
    
    uv += .5;
    return uv;
}

float getMaskDist(vec2 uv) {
    uv = uv * 2. - 1.;
    uv = ratio2(uv, uMeshSize);
    float d = length(uv);
    float aspectXY = uMeshSize.x / uMeshSize.y;
    float aspectYX = uMeshSize.y / uMeshSize.x;
    float aspect = min(aspectXY, aspectYX);
    d /= sqrt(1. + pow(aspect, 2.));
    return d;
}

void main() {
    vec2 uv = vUv;
    uv = cover(uMeshSize, uMediaSize.xy, uv);
    
    float d = getMaskDist(uv);
    float mask = 1. - step(uMouseEnterMask, d);
    
    uv = scale(uv, vec2(1. / (1. + (1. - uMouseEnter) * .25)), vec2(.5));
    
    uv = distort(uv);
    
    vec4 tex = texture2D(iChannel0, uv);
    vec3 color = tex.rgb;
    float alpha = mask * uOpacity;
    gl_FragColor = vec4(color, alpha);
}
`;

const CaseStudies = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const hoverImgRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.Camera;
    renderer?: THREE.WebGLRenderer;
    material?: THREE.ShaderMaterial;
    mesh?: THREE.Mesh;
    mouse: { x: number; y: number };
    offset: { x: number; y: number };
    animationId?: number;
  }>({
    mouse: { x: 0, y: 0 },
    offset: { x: 0, y: 0 }
  });

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !canvasRef.current) return;

    // Hide loading screen after a delay
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -window.innerWidth / 2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      -window.innerHeight / 2,
      -1000,
      1000
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasRef.current.appendChild(renderer.domElement);

    // Create geometry and material
    const geometry = new THREE.PlaneGeometry(1, 1, 64, 64);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        iMouse: { value: new THREE.Vector2(0, 0) },
        iChannel0: { value: null },
        uMeshSize: { value: new THREE.Vector2(0, 0) },
        uMediaSize: { value: new THREE.Vector2(0, 0) },
        uOffset: { value: new THREE.Vector2(0, 0) },
        uOpacity: { value: 0 },
        uMouseEnter: { value: 0 },
        uMouseEnterMask: { value: 0 }
      }
    });

    const mesh = new THREE.Mesh(geometry, material);
    const imgWidth = 366 * 0.9;
    const imgHeight = 450 * 0.9;
    mesh.scale.set(imgWidth, imgHeight, 1);
    scene.add(mesh);

    sceneRef.current = { scene, camera, renderer, material, mesh, mouse: { x: 0, y: 0 }, offset: { x: 0, y: 0 } };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      sceneRef.current.mouse = { x, y };

      if (hoverImgRef.current) {
        gsap.to(hoverImgRef.current, {
          x: e.clientX - imgWidth / 2,
          y: e.clientY - imgHeight / 2,
          duration: 0.8,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      sceneRef.current.animationId = requestAnimationFrame(animate);

      if (material && mesh) {
        // Lerp for smooth following
        sceneRef.current.offset.x += (sceneRef.current.mouse.x - sceneRef.current.offset.x) * 0.1;
        sceneRef.current.offset.y += (sceneRef.current.mouse.y - sceneRef.current.offset.y) * 0.1;

        material.uniforms.uOffset.value = new THREE.Vector2(
          (sceneRef.current.mouse.x - sceneRef.current.offset.x) * 1,
          (sceneRef.current.mouse.y - sceneRef.current.offset.y) * 1
        );

        gsap.to(mesh.position, {
          x: sceneRef.current.mouse.x * (window.innerWidth / 2),
          y: sceneRef.current.mouse.y * (window.innerHeight / 2),
          duration: 0.8,
          ease: "power2.out"
        });

        material.uniforms.iTime.value += 0.01;
        renderer.render(scene, camera);
      }
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.left = -window.innerWidth / 2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = -window.innerHeight / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.iResolution.value = new THREE.Vector2(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      if (renderer) {
        renderer.dispose();
      }
      if (geometry) {
        geometry.dispose();
      }
      if (material) {
        material.dispose();
      }
      if (canvasRef.current && renderer.domElement) {
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isMobile]);

  const handleItemHover = (study: typeof caseStudies[0]) => {
    if (isMobile) return;

    const { material, mesh } = sceneRef.current;
    if (!material || !hoverImgRef.current) return;

    hoverImgRef.current.src = study.image;

    const loader = new THREE.TextureLoader();
    loader.load(study.image, (texture) => {
      material.uniforms.iChannel0.value = texture;
      material.uniforms.uMeshSize.value = new THREE.Vector2(mesh!.scale.x, mesh!.scale.y);
      material.uniforms.uMediaSize.value = new THREE.Vector2(texture.image.width, texture.image.height);

      gsap.to(material.uniforms.uOpacity, { value: 1, duration: 0.3 });
      gsap.fromTo(material.uniforms.uMouseEnter, { value: 0 }, { value: 1, duration: 1.2, ease: "power2.out" });
      gsap.fromTo(material.uniforms.uMouseEnterMask, { value: 0 }, { value: 1, duration: 0.7, ease: "power2.out" });
    });
  };

  const handleGalleryLeave = () => {
    if (isMobile) return;

    const { material } = sceneRef.current;
    if (!material) return;

    gsap.to(material.uniforms.uOpacity, { value: 0, duration: 0.3 });
  };

  return (
    <div className="relative bg-black min-h-screen">
      <Header />
      
      {/* Loading Screen */}
      {isLoading && !isMobile && (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen transition-all duration-300 bg-black flex items-center justify-center">
          <div className="loading text-white text-3xl tracking-widest">
            {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, i) => (
              <span key={i} style={{ '--i': i } as React.CSSProperties} className="inline-block animate-blur">
                {letter}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* WebGL Canvas */}
      {!isMobile && (
        <div ref={canvasRef} className="fixed z-0 top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none" />
      )}

      {/* Main Content */}
      <div className="relative z-10 w-screen min-h-screen overflow-hidden pt-20">
        <div className="flex items-center justify-center min-h-screen py-20">
          <div className="mx-auto w-full px-4">
            <div 
              className="gallery flex flex-col divide-y-2 divide-solid divide-white mx-auto" 
              style={{ maxWidth: '45rem' }}
              onMouseLeave={handleGalleryLeave}
            >
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="gallery-item text-lg md:text-xl py-8 md:py-10 text-white cursor-pointer transition-opacity hover:opacity-70"
                  onMouseEnter={() => handleItemHover(study)}
                >
                  <div className="font-semibold">{study.title}</div>
                  <div className="text-sm md:text-base text-white/60 mt-2">{study.client} • {study.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hover Image */}
      {!isMobile && (
        <img 
          ref={hoverImgRef}
          className="hover-img fixed block opacity-0 pointer-events-none z-20" 
          alt="" 
          style={{ width: '329px', height: '405px' }}
        />
      )}

      <Footer />

      <style>{`
        @keyframes blur {
          to {
            filter: blur(5px);
          }
        }

        .loading span {
          animation: blur 1.5s calc(var(--i) / 5 * 1s) alternate infinite;
        }

        .hover-img {
          --scale: 0.9;
        }
      `}</style>
    </div>
  );
};

export default CaseStudies;
