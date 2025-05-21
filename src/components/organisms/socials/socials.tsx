import { GithubLogo, LinkedinLogo, XingLogo } from '@/components/atoms/logo';
import { InstagramLogo } from '@/components/atoms/img';

export default function Socials() {
  return (
    <div className="space-y-8">
      <header>
        <h2 className="space-x-1 text-5xl font-bold text-foreground">
          <span>Social accounts</span>
          <span className="text-muted-foreground">
            You can see my code or my social presence on
          </span>
        </h2>
      </header>

      <ul className="space-y-5">
        <li>
          <div className="group relative inline-flex items-center gap-4">
            <GithubLogo className="size-12" />

            <h3 className="space-x-1 font-bold text-foreground">
              <span>GitHub</span>
              <span className="text-muted-foreground">my code storage</span>
            </h3>
          </div>
        </li>

        <li>
          <div className="group relative inline-flex items-center gap-4">
            <LinkedinLogo className="size-12" />

            <h3 className="space-x-1 font-bold text-foreground">
              <span>LinkedIn</span>
              <span className="text-muted-foreground">as business profile</span>
            </h3>
          </div>
        </li>

        <li>
          <div className="group relative inline-flex items-center gap-4">
            <XingLogo className="size-12" />

            <h3 className="space-x-1 font-bold text-foreground">
              <span>Xing</span>
              <span className="text-muted-foreground">as business profile</span>
            </h3>
          </div>
        </li>

        <li>
          <div className="group relative inline-flex items-center gap-4">
            <InstagramLogo className="size-12" />

            <h3 className="space-x-1 font-bold text-foreground">
              <span>Instagram</span>
              <span className="text-muted-foreground">
                social media gallery and private posts
              </span>
            </h3>
          </div>
        </li>
      </ul>
    </div>
  );
}
