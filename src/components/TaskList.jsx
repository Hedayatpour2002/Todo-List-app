export default function TaskList({tasks}) {
  return (
    <div className="text-gray-100">
      {tasks.map((task)=> task.title)}
    </div>
  )
}
