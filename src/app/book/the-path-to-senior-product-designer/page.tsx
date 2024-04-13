import BookLayout from '@/components/book/book-layout';
import Blockquote from '@/components/ui/blockquote';

export default function ThePathToSeniorProductDesignerPage() {
  return (
    <BookLayout
      title="The Path to Senior Product Designer"
      author="Artiom Dashinsky"
      cover="/books/the-path-to-senior-product-designer-cover.jpg"
      releaseDate={new Date('2024-04-06')}
      summaryQuote="This book speaks his expertise from practice, so does Artiom Dashinksy."
      summaryDescription={
        <div>
          <p>
            <b className="mr-1 text-theme-contrary">
              If you ever felt in the need of, or being curious for guidance,
              this book is for you.
            </b>
            But not only when you&apos;re currently just starting on your design
            career, also when you&apos;re already in and you just want to have a
            look up on written down practises, behaviours, patterns and
            expertise of design work (and a little beyond, outside the design
            glass), have a read-on. This book is all about making and rasing
            awareness of your growth in design work, thinking as a designer and
            how to have impact as a designer, also in places you may not thought
            about first — benefiting your own goals, the team’s and the company
            one‘s.
          </p>
          <p className="ml-8">
            Also, i noticed that you can also use this book, by just opening up
            a page, and start reading the chapter which was opened.
          </p>
          <p className="ml-8">This book delivers what it claims to — growth.</p>
        </div>
      }
      learnings={
        <ul className="list-disc pl-5">
          <li>Plan your work</li>
          <li>Be confident</li>
          <li>Trust the process</li>
          <li>Be true on your own state of professional skill level</li>
          <li>Use tools that help for growth</li>
          <li>Do it again</li>
          <li>Be open for growth</li>
          <li>Be aware of the opportunities to and for growth</li>
          <li>
            Work and practise on communicating your work, articulate your reason
            why, think about your reason why
          </li>
          <li>Do retrospective about your work</li>
          <li>Be decisive</li>
          <li>Take ownership</li>
          <li>Applying knowledge to practise manifests it</li>
          <li>
            Have a look on chapters that might not seem to help right now, but
            improve your overall skillset
          </li>
          <li>Thinking for others can improve your own thinking</li>
          <li>
            There are chances to grow everywhere, you just have to look closely
          </li>
          <li>Focus on shipping</li>
          <li>Focus on the business impact of design</li>
        </ul>
      }
      outcome={
        <div>
          <p>
            <b className="mr-1 text-theme-contrary">
              Focus on the business impact of design
            </b>
            is one of the last sections of this book. In it, Artiom Dashinksy
            writes:
          </p>

          <Blockquote indent>
            „If there is one thing you should learn from this book, it‘s this —
            designers are hired to help companies drive their business
            objectives, and therefore all of your work should be looked at,
            presented, and communicated through the prism of business impact.
            This mindset will help you in almost every aspect of being a
            successful designer, including your ability to design better
            products, receive approvals for your ideas, and get your
            achievements recognized.“
          </Blockquote>

          <p>
            — Thanks Artiom, this just underlines my pre-existing perception of
            how important the business (objectives) is for design decisions, how
            the business drives the user interface, it surrounding topics and
            thinking outside the &apos;visual appearance&apos; part of design
            work.
          </p>
        </div>
      }
    />
  );
}
