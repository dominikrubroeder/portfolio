import { ReactNode } from 'react';

export default function HistoryEntry({
  entryDate,
  exitDate,
  companyTitle,
  jobTitle,
  isCurrent,
  children
}: {
  entryDate: string;
  exitDate?: string;
  companyTitle: string;
  jobTitle: string;
  isCurrent?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="relative before:absolute before:-left-[1.625rem] before:top-[2.125rem] before:block before:h-4 before:w-4 before:rounded-full before:bg-gray-5">
      <p>
        <span>{entryDate}</span> {exitDate && <span>– {exitDate}</span>}
        {isCurrent && (
          <span className="mx-1 rounded-full border border-gray-4 px-2 py-1.5 text-theme-contrary">
            Current
          </span>
        )}
      </p>
      <h3 className="font-bold text-theme-contrary">{companyTitle}</h3>
      <p>{jobTitle}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}
