"use client";

import { ICON_SIZES, type IconSizeId } from "@/lib/icon-sizes";
import { Fieldset, Legend, Option, Radio } from "./size-toggle.styles";

type SizeToggleProps = {
  value: IconSizeId;
  onChange: (value: IconSizeId) => void;
};

/**
 * Native radios in a fieldset, so arrow keys move between sizes and the group
 * is announced as one control — a row of buttons would give neither.
 */
export function SizeToggle({ value, onChange }: SizeToggleProps) {
  return (
    <Fieldset>
      <Legend>Icon Size</Legend>
      {ICON_SIZES.map((size) => (
        <Option key={size.id}>
          <Radio
            type="radio"
            name="icon-size"
            value={size.id}
            checked={value === size.id}
            onChange={() => onChange(size.id)}
          />
          {size.label}
        </Option>
      ))}
    </Fieldset>
  );
}
