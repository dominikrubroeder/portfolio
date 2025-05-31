import {
  CraftLogo,
  FigmaLogo,
  GithubLogo,
  GitlabLogo,
  WebstormLogo
} from '@/components/atoms/logo';
import { ToolsOverview } from '@/components/organisms/tools';

export function Tools() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2>
          Tools
          <span className="ml-2 font-medium text-muted-foreground">
            help me to visualize the application we build. I use
          </span>
        </h2>

        <ul className="space-y-5">
          <li>
            <div className="group relative inline-flex cursor-pointer items-center gap-4">
              <FigmaLogo className="size-12" />

              <h3 className="mb-0 space-x-1">
                <span>Figma</span>
                <span className="font-medium text-muted-foreground">
                  for user interface design and prototyping
                </span>
              </h3>
            </div>
          </li>

          <li>
            <div className="group relative inline-flex cursor-pointer items-center gap-4">
              <WebstormLogo className="size-12" />

              <h3 className="mb-0 space-x-1">
                <span>WebStorm</span>
                <span className="font-medium text-muted-foreground">
                  as IDE
                </span>
              </h3>
            </div>
          </li>

          <li>
            <div className="group relative inline-flex cursor-pointer items-center gap-4">
              <CraftLogo className="size-12" />

              <h3 className="mb-0 space-x-1">
                <span>Craft</span>
                <span className="font-medium text-muted-foreground">
                  as my main note and documentation tool
                </span>
              </h3>
            </div>
          </li>

          <li>
            <div className="group relative inline-flex cursor-pointer items-center gap-4">
              <GithubLogo className="size-12" />

              <h3 className="mb-0 space-x-1">
                <span>GitHub</span>
                <span className="font-medium text-muted-foreground">
                  to store my private codebase
                </span>
              </h3>
            </div>
          </li>

          <li>
            <div className="group relative inline-flex cursor-pointer items-center gap-4">
              <GitlabLogo className="size-12" />

              <h3 className="mb-0 space-x-1">
                <span>GitLab</span>
                <span className="font-medium text-muted-foreground">
                  is mainly used at workspace
                </span>
              </h3>
            </div>
          </li>
        </ul>
      </div>

      <ToolsOverview />
    </div>
  );
}
