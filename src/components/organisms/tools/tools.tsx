import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { BrandList } from '@/components/organisms/brand';
import { AllTools, mainTools } from '@/components/organisms/tools';
import { Marker } from '@/components/atoms/marker';
import { LiveEditContainer } from '@/components/organisms/live-edit';

export function Tools() {
  return (
    <Animate direction="up">
      <LiveEditContainer componentName="tools.tsx">
        <Container className="space-y-6" id="tools">
          <div className="space-y-5">
            <div className="space-y-3">
              <h2>
                Tools
                <span className="ml-2 font-medium text-muted-foreground">
                  help to <Marker animate={true}>visualize</Marker>
                  <span> and </span>
                  <Marker animate>communicate</Marker> the application we build
                </span>
              </h2>

              <p>A selection of tools I use regularly:</p>
            </div>

            <BrandList brands={mainTools} />
          </div>

          <AllTools />
        </Container>
      </LiveEditContainer>
    </Animate>
  );
}
