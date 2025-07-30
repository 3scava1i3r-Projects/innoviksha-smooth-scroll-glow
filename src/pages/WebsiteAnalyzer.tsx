import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const WebsiteAnalyzer: React.FC = () => {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResults(null);
    setLoading(true);

    if (!url) {
      setError('Please enter a URL to analyze.');
      setLoading(false);
      return;
    }

    try {
      const [
        w3cRes,
        ssllabsRes,
        hackertargetRes,
        ipapiRes,
      ] = await Promise.all([
        fetch(`/api/w3c?doc=${encodeURIComponent(url)}&out=json`),
        fetch(`/api/ssllabs?host=${new URL(url).hostname}`),
        fetch(`/api/hackertarget?q=${new URL(url).hostname}`),
        fetch(`/api/ipapi/json`),
      ]);

      const w3c = w3cRes.ok ? await w3cRes.json() : { messages: [] };
      const ssllabs = ssllabsRes.ok ? await ssllabsRes.json() : null;
      const hackertarget = hackertargetRes.ok ? await hackertargetRes.text() : null;
      const ipapi = ipapiRes.ok ? await ipapiRes.json() : null;

      setResults({
        w3c,
        ssllabs,
        hackertarget,
        ipapi,
      });
    } catch (err) {
      setError('An error occurred while analyzing the URL.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-4 mt-20">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Website Analyzer</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex items-center gap-4">
                <Input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  required
                  className="flex-grow"
                />
                <Button type="submit" disabled={loading}>
                  {loading ? 'Analyzing...' : 'Analyze'}
                </Button>
              </div>
            </form>
            {error && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                <p>{error}</p>
              </div>
            )}
            {results && (
              <div className="mt-6 grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>HTML Code Quality</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {results.w3c.messages.length > 0 ? (
                      <ul>
                        {results.w3c.messages.map((msg: any, i: number) => (
                          <li key={i} className="mb-2">
                            <strong>{msg.type}:</strong> {msg.message}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No HTML errors found.</p>
                    )}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>SSL/TLS Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {results.ssllabs ? (
                      <p>Grade: {results.ssllabs.endpoints[0].grade}</p>
                    ) : (
                      <p>Could not fetch SSL/TLS information.</p>
                    )}
                  </CardContent>
                </Card>
                {/* <Card>
                  <CardHeader>
                    <CardTitle>WHOIS Info</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {results.hackertarget ? (
                      <pre>{results.hackertarget}</pre>
                    ) : (
                      <p>Could not fetch WHOIS information.</p>
                    )}
                  </CardContent>
                </Card> */}
                <Card>
                  <CardHeader>
                    <CardTitle>IP & Geolocation (ipapi)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {results.ipapi ? (
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <p><strong>IP:</strong> {results.ipapi.ip}</p>
                        <p><strong>Network:</strong> {results.ipapi.network}</p>
                        <p><strong>Version:</strong> {results.ipapi.version}</p>
                        <p><strong>City:</strong> {results.ipapi.city}</p>
                        <p><strong>Region:</strong> {results.ipapi.region}</p>
                        <p><strong>Country:</strong> {results.ipapi.country_name}</p>
                        <p><strong>Postal:</strong> {results.ipapi.postal}</p>
                        <p><strong>Latitude:</strong> {results.ipapi.latitude}</p>
                        <p><strong>Longitude:</strong> {results.ipapi.longitude}</p>
                        <p><strong>Timezone:</strong> {results.ipapi.timezone}</p>
                        <p><strong>ASN:</strong> {results.ipapi.asn}</p>
                        <p><strong>ISP:</strong> {results.ipapi.org}</p>
                      </div>
                    ) : (
                      <p>Could not fetch IP & Geolocation information.</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default WebsiteAnalyzer;
