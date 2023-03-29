import './styles/pure.scss'
import dayjs from "dayjs";
import { BsCalendar2Check } from "react-icons/bs";

interface Props{
    dueDate: string,
}

function DueDate(props: Props) {
    const formattedDate= dayjs(props.dueDate).format('MMM/DD/YY')
  return (
    <div className="due-date">
      <BsCalendar2Check />
      {formattedDate}
    </div>
  )
}

export default DueDate
