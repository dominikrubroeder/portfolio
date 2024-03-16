import TextBlockPlaceholder from '@/components/placeholder/text-block';
import HistoryEntry from '@/components/history/history-entry';

export default function HistorySection() {
  return (
    <section className="grid max-w-screen-sm grid-cols-[auto_1fr] gap-4 px-4 md:pl-16">
      <div className="h-full w-1 shrink-0 rounded-full bg-gray-5"></div>
      <div className="grid gap-12">
        <HistoryEntry
          entryDate="01 April, 2023"
          companyTitle="mediawave commerce GmbH"
          jobTitle="UX Engineer"
          isCurrent={true}
        >
          <TextBlockPlaceholder />
        </HistoryEntry>

        <HistoryEntry
          entryDate="01 August, 2021"
          exitDate="31 March, 2023"
          companyTitle="mediawave commerce GmbH"
          jobTitle="Volunteer on Application Engineering, Dual Student (B. A. Media Design)"
        >
          <TextBlockPlaceholder />
        </HistoryEntry>

        <HistoryEntry
          entryDate="01 September, 2018"
          exitDate="31 July, 2021"
          companyTitle="Loy GmbH"
          jobTitle="Frontend Design and Development"
        >
          <TextBlockPlaceholder />
        </HistoryEntry>
      </div>
    </section>
  );
}
