import HistoryEntry from '@/components/sections/history-section/history-entry';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Section from '@/components/sections/section';

export default function Index() {
  return (
    <Section
      id="history"
      className="mx-auto grid max-w-screen-sm grid-cols-[auto_1fr] gap-4 px-4 md:pl-28"
    >
      <div className="h-full w-1 shrink-0 rounded-full bg-accent"></div>

      <div className="grid gap-12">
        <HistoryEntry
          entryDate="01 April, 2023"
          companyTitle="mediawave commerce GmbH"
          jobTitle="UX Engineer"
          isCurrent={true}
        >
          <div className="mb-2">
            <p>Team Frontend</p>
            <div>
              Projects
              <ul className="pl-4">
                <li>– Project: Segmüller</li>
                <li>– Project: HD+</li>
                <li>– Project pitches: Fischer Sports, HD+, SPD</li>
              </ul>
            </div>
            <p>Responsibilities</p>
            <p>Keywords/ Tags</p>
          </div>
        </HistoryEntry>

        <HistoryEntry
          entryDate="01 August, 2021"
          exitDate="31 March, 2023"
          companyTitle="mediawave commerce GmbH"
          jobTitle="Volunteer on Application Engineering, Dual Student (B. A. Media Design)"
        >
          <div className="mb-2">
            <hr className="my-8 ml-32" />

            <p>Dual study (Work 3 days, study 2)</p>
            <p>Volunteer on Application Engineering</p>
            <p>
              B. A. Bachelor of Arts – Media Design,
              <Link
                href="https://www.iu.de/bachelor/mediendesign/"
                target="_blank"
                className="group ml-1 inline-flex items-center gap-1 pb-1"
              >
                <span className="border-b transition group-hover:text-theme-contrary">
                  IU international university
                </span>
                <ArrowTopRightOnSquareIcon className="size-4 transition group-hover:text-theme-contrary" />
              </Link>
            </p>
            <p className="-mt-1">Semester 5 – 7</p>
            <p>
              <Link
                href="/work/bachelor-thesis-prework-dominik-rubroeder-nintendo.pdf"
                className="inline-flex items-center gap-1 hover:text-theme-contrary"
                target="_blank"
                download
              >
                <span className="inline-block border-b">Pre work</span>
                <span>(DE)</span>
                <ArrowDownTrayIcon className="size-4" />
              </Link>
            </p>
            <p>
              <Link
                href="/work/bachelor-thesis-dominik-rubroeder-nintendo.pdf"
                className="inline-flex items-center gap-1 hover:text-theme-contrary"
                target="_blank"
                download
              >
                <span className="inline-block border-b">Final exam</span>
                <span>(DE)</span>
                <ArrowDownTrayIcon className="size-4" />
              </Link>
            </p>
          </div>
        </HistoryEntry>

        <HistoryEntry
          entryDate="01 September, 2016"
          exitDate="31 July, 2021"
          companyTitle="Loy GmbH"
          jobTitle="Frontend Design and Development"
        >
          <hr className="my-8 ml-32" />
          <div className="grid gap-4">
            <div className="mb-2">
              <p>Dual study (Work 3 days, study 2)</p>
              <p>Frontend Design and Development</p>
              <p>
                B. A. Bachelor of Arts – Media Design,
                <Link
                  href="https://www.iu.de/bachelor/mediendesign/"
                  target="_blank"
                  className="group ml-1 inline-flex items-center gap-1 pb-1"
                >
                  <span className="border-b transition group-hover:text-theme-contrary">
                    IU international university
                  </span>
                  <ArrowTopRightOnSquareIcon className="size-4 transition group-hover:text-theme-contrary" />
                </Link>
              </p>
              <p className="-mt-1">Semester 1 – 4</p>
            </div>
          </div>

          <hr className="my-8 ml-32" />

          <div className="grid gap-4">
            <div className="mb-2">
              <p>Full time</p>
              <p>Frontend Design and Development</p>
              <p>February, 2019 – September, 2019</p>
            </div>
          </div>

          <hr className="my-8 ml-32" />

          <div className="grid gap-4">
            <div className="mb-2">
              <p>Trainee</p>
              <p>Digital Media Design</p>
              <p>September, 2016 – February, 2019</p>
            </div>
          </div>
        </HistoryEntry>

        <HistoryEntry
          entryDate="2016"
          companyTitle="Kickoff"
          jobTitle="Starting as Trainee, Digital Media Design"
        >
          Kickoff
        </HistoryEntry>
      </div>
    </Section>
  );
}
