"use client";

import * as React from "react";
import { Phone } from "lucide-react";
import { ButtonV2, type ButtonV2Props } from "./button-v2";

/**
 * PhoneButtonV2 - Specialized button for phone number links
 *
 * Automatically formats phone links with tel: protocol and includes a phone icon.
 *
 * Usage:
 * ```tsx
 * <PhoneButtonV2 phone="888-909-9431" />
 * <PhoneButtonV2 phone="888-909-9431" variant="glass" />
 * <PhoneButtonV2 phone="888-909-9431" showIcon={false}>Call Now</PhoneButtonV2>
 * ```
 */

export interface PhoneButtonV2Props extends Omit<ButtonV2Props, "href" | "iconLeft"> {
  /** Phone number (will be formatted as tel: link) */
  phone: string;
  /** Show phone icon (default: true) */
  showIcon?: boolean;
}

export const PhoneButtonV2 = React.forwardRef<HTMLAnchorElement, PhoneButtonV2Props>(
  ({ phone, showIcon = true, children, variant = "phone", ...props }, ref) => {
    return (
      <ButtonV2
        ref={ref as any}
        href={`tel:${phone}`}
        variant={variant}
        iconLeft={showIcon ? Phone : undefined}
        {...props}
      >
        {children || phone}
      </ButtonV2>
    );
  }
);

PhoneButtonV2.displayName = "PhoneButtonV2";
