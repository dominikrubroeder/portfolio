import { GithubLogo, LinkedinLogo, XingLogo } from '@/components/atoms/logo';
import { InstagramLogo } from '@/components/atoms/img';

export function Socials() {
  return (
    <div className="space-y-8">
      <header>
        <h2>
          Social accounts
          <span className="ml-2 font-medium text-muted-foreground">
            You can see my code and social presence on
          </span>
        </h2>
      </header>

      <ul className="space-y-5">
        <li>
          <div className="group relative inline-flex items-center gap-4">
            <GithubLogo className="size-12" />

            <h3 className="mb-0 space-x-1">
              <span>GitHub</span>
              <span className="font-medium text-muted-foreground">
                my code storage
              </span>
            </h3>
          </div>
        </li>

        <li>
          <div className="group relative inline-flex items-center gap-4">
            <LinkedinLogo className="size-12" />

            <h3 className="mb-0 space-x-1">
              <span>LinkedIn</span>
              <span className="font-medium text-muted-foreground">
                as business profile
              </span>
            </h3>
          </div>
        </li>

        <li>
          <div className="group relative inline-flex items-center gap-4">
            <XingLogo className="size-12" />

            <h3 className="mb-0 space-x-1">
              <span>Xing</span>
              <span className="font-medium text-muted-foreground">
                as business profile
              </span>
            </h3>
          </div>
        </li>

        <li>
          <div className="group relative inline-flex items-center gap-4">
            <InstagramLogo className="size-12" />

            <h3 className="mb-0 space-x-1">
              <span>Instagram</span>
              <span className="font-medium text-muted-foreground">
                private posts
              </span>
            </h3>
          </div>
        </li>
      </ul>
    </div>
  );
}
