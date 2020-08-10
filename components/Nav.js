import Link from "next/link";

export default function Nav(props) {
  return (
    <ul className="auxNav" {...props}>
      <li>
        <Link href="/about">
          <a>wtf</a>
        </Link>
      </li>

      <li>
        <a className="nidLink" href="https://thenidnogg.typeform.com/to/VXVWgd2m">join</a>
      </li>

      <li>
        <a className="nidLink" href="https://codesandbox.io/s/nostalgic-silence-hi3rc?file=/src/styles.css">quit</a>
      </li>

      <li>
        <a className="nidLink" href="https://codesandbox.io/s/clever-moon-p3wjq?file=/src/App.js">contribute</a>
      </li>


      <style jsx>{`
        ul {
          padding: 0;
          margin: 0;
          display: flex;
        }

        ul li {
          list-style: none;
          margin-right: 2.2rem;
        }

        ul li a {
          --base-color: #301f09;
          --base-color-s1: #f5ad58;
          --base-color-s2: #fad6ab;
          --base-color-s3: #634F09;
          --base-color-s4: #3D3C35;
          color: #f5ad58;
          font-size: 3rem;
          text-decoration: none;
          transition: color 150ms ease;
        }

        ul li a:hover {
          color: #634F09;
        }
      `}</style>
    </ul>
  );
}
