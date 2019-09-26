import React, { useContext } from "react";

function useRuleEngine() {
  const { pkg, setPkg } = useContext(RuleEngineContext);
  return { pkg, setPkg };
}

const RuleEngineContext = React.createContext();

export { useRuleEngine };

export default RuleEngineContext;
