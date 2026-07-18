type RedditPost = {
  // Widened to `string` (rather than a literal union) because this
  // shape is inferred from a plain JSON content file, which TypeScript
  // cannot narrow to literal types. Exact values are enforced at
  // runtime in the filter below.
  contentType: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  subreddit: string;
  redditUrl: string;
  category?: string;
  websiteEligible: boolean;
  showInLivingWindow: boolean;
  websiteApprovalStatus: string;
};

const linkClasses =
  "inline-block rounded-sm text-xs font-semibold uppercase tracking-[0.2em] text-muted-bronze underline decoration-muted-bronze/40 underline-offset-4 transition-colors duration-300 hover:text-tiger-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tiger-gold/60";

function noteMeta(post: Pick<RedditPost, "category" | "subreddit" | "publishedDate">) {
  const parts = [post.category, `Reddit · ${post.subreddit}`, post.publishedDate].filter(
    Boolean,
  );
  return parts.join(" · ");
}

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
  // Newest-approved-first: the content file is curated in that order,
  // so the first three approved, eligible originals are the three
  // most recent notes.
  const approvedPosts = posts.filter(
    (post) =>
      post.contentType === "REDDIT_ORIGINAL_POST" &&
      post.websiteEligible &&
      post.showInLivingWindow &&
      post.websiteApprovalStatus === "approved",
  );
  const [mainPost, ...secondaryPosts] = approvedPosts.slice(0, 3);

  return (
    <div className="rounded-[2.5rem] border border-divider-line bg-cream-white/90 px-8 py-14 shadow-md sm:px-14 sm:py-16">
      <div className="mx-auto max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-bronze">
          {label}
        </p>
        <p className="mt-3 text-sm text-body-text">{description}</p>
      </div>

      {mainPost ? (
        <div className="mt-10 border-t border-divider-line pt-10">
          <div
            className={
              secondaryPosts.length > 0
                ? "grid gap-8 sm:grid-cols-[1.6fr_1fr] sm:gap-10"
                : "mx-auto max-w-lg"
            }
          >
            <div className="text-left">
              <h3 className="font-display text-xl text-obsidian sm:text-2xl">
                {mainPost.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-body-text">
                {mainPost.excerpt}
              </p>
              <p className="mt-4 text-xs uppercase tracking-wide text-soft-text">
                {noteMeta(mainPost)}
              </p>
              <a
                href={mainPost.redditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-3 ${linkClasses}`}
              >
                {readOnRedditLabel}
              </a>
            </div>

            {secondaryPosts.length > 0 ? (
              <div className="flex flex-col text-left">
                {secondaryPosts.map((post, index) => (
                  <div
                    key={post.redditUrl}
                    className={
                      index === 0
                        ? "border-t border-divider-line pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8"
                        : "mt-6 border-t border-divider-line pt-6 sm:pl-8"
                    }
                  >
                    <h4 className="text-sm font-semibold text-obsidian">
                      {post.title}
                    </h4>
                    <p className="mt-1.5 text-sm text-body-text">
                      {post.excerpt}
                    </p>
                    <p className="mt-2 text-[0.65rem] uppercase tracking-wide text-soft-text">
                      {noteMeta(post)}
                    </p>
                    <a
                      href={post.redditUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-2 ${linkClasses}`}
                    >
                      {readOnRedditLabel}
                    </a>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="mt-10 text-center">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-sm text-sm tracking-wide text-title-primary underline decoration-divider-line underline-offset-4 transition-colors duration-300 hover:text-muted-bronze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tiger-gold/60"
        >
          {author}
        </a>
      </div>
    </div>
  );
}
