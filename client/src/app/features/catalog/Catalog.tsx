import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { beagleSelectors, fetchBeaglesAsync } from "./catalogSlice";

export default function Catalog() {
  const beagles = useAppSelector(beagleSelectors.selectAll);
  const { beaglesLoaded, status } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!beaglesLoaded) dispatch(fetchBeaglesAsync());
  }, [beaglesLoaded, dispatch]);

  if (status.includes("pending")) return <>loading...</>;
  if (status.includes("error")) return <>there was a problem...</>;
  return (
    <>
      <div>Beagles</div>
    </>
  );
}
