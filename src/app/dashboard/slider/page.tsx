'use client'

import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const Page = () => {
  const [sliderValue, setSliderValue] = useState(10)
  const [rangeValue, setRangeValue] = useState([2, 20])

  return (
    <div className="grid grid-cols-1 gap-3">
      <h3>Slider Value: {sliderValue}</h3>
      <Slider
        defaultValue={[sliderValue]}
        onValueChange={(value) => setSliderValue(value[0])}
        max={100}
        step={1}
      />


      <h3>Range Value: {rangeValue.join(',')}</h3>
      <Slider
        defaultValue={rangeValue}
        onValueChange={setRangeValue}
        max={100}
        step={1}
      />
    </div>
  );
}

export default Page