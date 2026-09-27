import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function ErrorBadge({ error }) {
  return (
      <div className="badge badge-soft badge-error w-full h-12 font-semibold flex items-center">
        <FontAwesomeIcon icon={faCircleExclamation} />
        {error}
    </div>
  );
}
