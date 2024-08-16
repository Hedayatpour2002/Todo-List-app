import PropTypes from "prop-types";

export default function TaskList({ tasks }) {
  return <div className="text-gray-100">{tasks.map((task) => task.title)}</div>;
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
