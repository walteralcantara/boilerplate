import { render, screen } from "@testing-library/react";

import Keren from ".";

describe("<Keren />", () => {
  it("should render the Keren", () => {
    const { container } = render(<Keren />);

    expect(screen.getByRole("heading", { name: /Keren/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
