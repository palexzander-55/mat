import Link from "next/link";
import FAQ, { FaqProps } from "../components/faq";

const questions: FaqProps = {
  questions: [
    ["What is TypeScript?", "TypeScript is a superset of JavaScript."],
    ["Why use TypeScript?", "TypeScript helps you write safer and more maintainable code."],
  ],
};

export default function Classes() {
  return (
    <main>
      <div className="container px-2">
        <h1 className="title is-1 pt-3" style={{ }}>General Class Information</h1>

        <div className="section">
          <div className="content ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis nulla quia explicabo blanditiis quae, impedit ipsa repellat harum consequatur, dolore laborum corporis in? Eligendi explicabo ducimus aut sunt harum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis nulla quia explicabo blanditiis quae, impedit ipsa repellat harum consequatur, dolore laborum corporis in? Eligendi explicabo ducimus aut sunt harum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis nulla quia explicabo blanditiis quae, impedit ipsa repellat harum consequatur, dolore laborum corporis in? Eligendi explicabo ducimus aut sunt harum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis nulla quia explicabo blanditiis quae, impedit ipsa repellat harum consequatur, dolore laborum corporis in? Eligendi explicabo ducimus aut sunt harum?</p>
          </div>
          <div className="buttons is-centered ">
            <Link href="/classes/locations" >
              <button className="button is-dark is-medium ">
                <span>See our Locations</span>
              </button>
            </Link>
            <Link href="/classes/schedule" >
              <button className="button is-primary is-medium ">
                <span>Class Schedule</span>
              </button>
            </Link>
          </div>
        </div>


      </div>
      <FAQ faqProp={questions} />

    </main>
  );
}