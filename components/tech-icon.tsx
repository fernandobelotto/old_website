import {
  Tooltip,
} from 'react-tippy';
export function TechIcon({ Icon, name }: any) {
  return (
    <Tooltip
      title={name}
      position="bottom"
    >
      <Icon className="text-4xl dark:text-white hover:scale-125 ease-in-out duration-300"></Icon>
    </Tooltip>
  );
}
