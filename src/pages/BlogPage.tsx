import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, ExternalLinkIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useCursor } from '@/contexts/CursorContext';

interface BlogPost {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  categories: string[];
  thumbnail?: string;
  author: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { setCursorType } = useCursor();
  
  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    const fetchMediumFeed = async () => {
      try {
        setLoading(true);
        
        // Use RSS2JSON service to convert Medium RSS to JSON (free tier)
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@innovs`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        
        const data = await response.json();
        
        if (data.status !== 'ok') {
          throw new Error('RSS feed error');
        }
        
        const formattedPosts: BlogPost[] = data.items.map((item: any) => {
          const thumbnailMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
          return {
            title: item.title,
            link: item.link,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
            pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            categories: item.categories || [],
            thumbnail: thumbnailMatch ? thumbnailMatch[1] : (item.thumbnail || item.enclosure?.link),
            author: item.author || '3scava1i3r'
          };
        });
        
        setPosts(formattedPosts);
      } catch (err) {
        console.error('Error fetching Medium feed:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMediumFeed();
  }, []);

  // Get posts for current page
  const getCurrentPagePosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return posts.slice(startIndex, endIndex);
  };

  // Check if we should show the "Read More" card
  const shouldShowReadMoreCard = () => {
    const currentPosts = getCurrentPagePosts();
    return currentPosts.length < postsPerPage || currentPage === totalPages;
  };

  // Skeleton Card Component
  const SkeletonCard = () => (
    <Card className="animate-pulse">
      <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <div className="w-24 h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="w-full h-6 bg-gray-200 rounded mb-2"></div>
        <div className="w-3/4 h-6 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-2">
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
          <div className="w-4/6 h-4 bg-gray-200 rounded"></div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
          <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
        </div>
        <div className="w-24 h-5 bg-gray-200 rounded"></div>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-20 flex-grow">
          {/* Hero Section Skeleton */}
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-12 md:h-16 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>
              <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
            </div>
          </div>

          {/* Blog Posts Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Array.from({ length: 9 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-background min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-red-500 mb-8">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-20 flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on technology, development, and innovation from our team.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {getCurrentPagePosts().map((post, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 cursor-none"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            >
              {post.thumbnail && (
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 grayscale group-hover:grayscale-0"
                  />
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{post.pubDate}</span>
                </div>
                
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                
                <CardDescription className="line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.slice(0, 3).map((category, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
                
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  Read More
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
          
          {/* Read More on Medium Card - Show when there's space or on last page */}
          {shouldShowReadMoreCard() && (
            <Card 
              className="group hover:shadow-lg transition-all duration-300 cursor-none bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 grayscale group-hover:grayscale-0"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/30 rounded-t-lg flex items-center justify-center">
                <div className="text-6xl opacity-50">📖</div>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <ExternalLinkIcon className="w-4 h-4" />
                  <span>Medium Platform</span>
                </div>
                
                <CardTitle className="group-hover:text-primary transition-colors">
                  Read More Articles
                </CardTitle>
                
                <CardDescription>
                  Discover more insightful articles, tutorials, and thoughts on our Medium publication. Join our community of readers and stay updated with the latest content.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">Tech</Badge>
                  <Badge variant="secondary" className="text-xs">Innovation</Badge>
                  <Badge variant="secondary" className="text-xs">Tutorials</Badge>
                </div>
                
                <a 
                  href="https://medium.com/@innovs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  Visit Medium Profile
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="cursor-none"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            >
              <ChevronLeftIcon className="w-4 h-4 mr-1" />
              Previous
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className="cursor-none w-10"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  {page}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="cursor-none"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={() => setCursorType('default')}
            >
              Next
              <ChevronRightIcon className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}

        {posts.length === 0 && !loading && !error && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold mb-4">No blog posts found</h3>
            <p className="text-muted-foreground">
              Check back later for new content from our team.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
