import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const URLShortener: React.FC = () => {
  const [longUrl, setLongUrl] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!longUrl) {
      setError('Please enter a URL to shorten.');
      return;
    }

    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          url: longUrl,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.result_url);
      } else {
        setError(data.error || 'An error occurred.');
      }
    } catch (err) {
      setError('An error occurred while shortening the URL.');
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-4 mt-20">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>URL Shortener</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="longUrl" className="block text-sm font-medium text-gray-700">
                    Long URL
                  </label>
                  <Input
                    id="longUrl"
                    type="url"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    placeholder="https://example.com"
                    required
                  />
                </div>
                <Button type="submit">Shorten URL</Button>
              </div>
            </form>
            {result && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                <div className="flex items-center justify-between">
                  <p>
                    Shortened URL:{' '}
                    <a
                      href={result}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium"
                    >
                      {result}
                    </a>
                  </p>
                  <Button
                    onClick={() => navigator.clipboard.writeText(result)}
                    size="sm"
                  >
                    Copy
                  </Button>
                </div>
              </div>
            )}
            {error && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                <p>{error}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default URLShortener;
