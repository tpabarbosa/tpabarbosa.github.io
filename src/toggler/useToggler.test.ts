import { renderHook, act } from "@testing-library/react-hooks";

import { useToggler } from "./useToggler";

describe("useToggler", () => {
  it("sets initial value to false when instantiated without param", () => {
    const { result } = renderHook(() => useToggler());
    expect(result.current[0]).toEqual(false);
  });

  it("sets initial value to true when instantiated with true", () => {
    const { result } = renderHook(() => useToggler(true));
    expect(result.current[0]).toEqual(true);
  });

  it("sets initial value to false when instantiated with false", () => {
    const { result } = renderHook(() => useToggler(false));
    expect(result.current[0]).toEqual(false);
  });

  it("toggles value when is toggler is called", () => {
    const { result } = renderHook(() => useToggler());
    expect(result.current[0]).toEqual(false);
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toEqual(true);

    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toEqual(false);
  });
});
