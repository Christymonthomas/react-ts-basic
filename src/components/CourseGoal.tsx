import { FC, type ReactNode } from "react";

type CourseGoalProps = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
};

export default function CourseGoal({
  title,
  children,
  onDelete,
  id,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// An alternate to above func decleration

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
