import { Container } from '@/components/organisms/layout';
import { Animate } from '@/components/molecules/animate/animate';
import { BrandList } from '@/components/organisms/brand';
import { mainTools, ToolsList } from '@/components/organisms/tools';

export function Tools() {
  return (
    <Animate>
      <Container className="space-y-2" id="tools">
        <div className="space-y-5">
          <div className="space-y-3">
            <h2>
              Tools
              <span className="ml-2 font-medium text-muted-foreground">
                help to visualize, organize and communicate the application we
                build
              </span>
            </h2>

            <p>I'm very familiar with:</p>
          </div>

          <BrandList brands={mainTools} />
        </div>

        <ToolsList />
      </Container>
    </Animate>
  );
}
