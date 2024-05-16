import { InfoIconShapeProps } from "./infoIconShape.types";
import { Icon } from "../../../../../Icon/Icon";

export function InfoIconShape({ icon, iconSize = 20 }: Readonly<InfoIconShapeProps>) {
  return (
    <div className="flex mr-4 bg-dark-150 rounded-xl w-min-8 h-8 p-1 justify-center items-center">
      <Icon name={icon} className="text-blue-200" iconSize={iconSize} />
    </div>
  );
}
