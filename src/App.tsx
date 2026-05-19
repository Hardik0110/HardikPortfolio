import { Suspense, lazy } from "react";
import CustomCursor from "@/components/ui/CustomCursor";

const Index = lazy(() => import("./pages/Index"));

const App = () => (
  <>
    <CustomCursor />
    <Suspense fallback={null}>
      <Index />
    </Suspense>
  </>
);

export default App;
