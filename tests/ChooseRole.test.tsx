import React from "react";
import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ChooseRole from "../src/components/ChooseRole";
import "@testing-library/jest-dom/vitest";
import { roles } from "../src/constants/constants";

describe("ChooseRole Component", () => {
  it("should render all roles", () => {
    const mockSetSelectedRole = vi.fn();
    render(<ChooseRole setSelectedRole={mockSetSelectedRole} />);

    roles.forEach((role) => {
      const roleElement = screen.getByText(role.title);
      expect(roleElement).toBeInTheDocument();
    });
  });

  it("should call setSelectedRole when a role is clicked", () => {
    const mockSetSelectedRole = vi.fn();
    render(<ChooseRole setSelectedRole={mockSetSelectedRole} />);

    roles.forEach((role) => {
      const roleElement = screen.getByText(role.title);
      fireEvent.click(roleElement);
      expect(mockSetSelectedRole).toHaveBeenCalledWith(role.name);
    });
  });
});
