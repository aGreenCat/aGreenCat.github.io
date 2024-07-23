import { Name } from "./Name";

export const Greeting = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center overflow-visible align-bottom">
      <div className="text-5xl lg:text-7xl h-[41px] lg:h-[62px] font-medium inline-block tet-nowrap">Hey, I'm</div>
      <Name />
    </div>
  )
}