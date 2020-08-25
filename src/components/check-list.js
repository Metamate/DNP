import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function CheckList({ items }) {
  return (
    /* Have to hardcode style due to specificity issue with tailwind. TODO: Fix */
    <ul style={{ paddingLeft: "1rem" }}>
      {items.map((child) => (
        <li key={child.toString()} className="list-none">
          <FontAwesomeIcon
            className="w-4 inline mr-2 text-green-500"
            icon={faCheck}
          />
          {child}
        </li>
      ))}
    </ul>
  );
}
