type RedditPost = {
  title: string;
  excerpt: string;
  date: string;
  subreddit: string;
  url: string;
  showOnWebsite: boolean;
};

export function HomeLivingWindow({
  label,
  description,
  readOnRedditLabel,
  author,
  profileUrl,
  posts,
}: {
  label: string;
  description: string;
  readOnRedditLabel: string;
  author: string;
  profileUrl: string;
  posts: RedditPost[];
}) {
  // Posts are curated newest-first in the content file, so the first
  // three approved entries are the three most recent notes.
  const recentPosts = posts.filter((post) => post.showOnWebsite).slice(0, 3);

  const gridColsClass =
    recentPosts.length >= 3
      ? "sm:grid-cols-3"
      : recentPosts.length === 2
        ? "sm:grid-cols-2"
        : "";

  return (
    <div className="rounded-[2.5rem] bg-playful-magenta px-8 py-16 text-center shadow-md sm:px-16">
      <p className="text-xs uppercase tracking-[0.25em] text-cream-white/70">
        {label}
      </p>
      <p className="mx-auto mt-4 max-w-md text-cream-white/90">
        {description}
      </p>

      {recentPosts.length > 0 ? (
        <div className={`mt-10 grid gap-5 text-left ${gridColsClass}`}>
          {recentPosts.map((post) => (
            <div
              key={post.url}
              className="flex flex-col rounded-2xl bg-cream-white/95 p-6 shadow-md"
            >
              <h3 className="font-display text-base text-obsidian">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-body-text">{post.excerpt}</p>
              <p className="mt-3 text-xs uppercase tracking-wide text-soft-text">
                {post.date} &middot; {post.subreddit}
              </p>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-muted-bronze underline decoration-muted-bronze/40 underline-offset-4 transition-colors duration-300 hover:text-tiger-gold"
              >
                {readOnRedditLabel}
              </a>
              <p className="mt-3 text-xs text-soft-text">{author}</p>
            </div>
          ))}
        </div>
      ) : null}

      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block text-sm tracking-wide text-cream-white underline decoration-cream-white/50 underline-offset-4 transition-colors duration-300 hover:text-sunny-orange"
      >
        {author}
      </a>
    </div>
  );
}
