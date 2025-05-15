import { useState, useCallback } from "react";

export const useOptimisticUpdate = <T>(
  initialValue: T,
  updateFn: (newValue: T) => Promise<void>
) => {
  const [value, setValue] = useState<T>(initialValue);
  const [isUpdating, setIsUpdating] = useState(false);

  const update = useCallback(
    async (newValue: T) => {
      setValue(newValue);
      setIsUpdating(true);
      try {
        await updateFn(newValue);
      } catch (e) {
        setValue(initialValue); // Rollback on error
      } finally {
        setIsUpdating(false);
      }
    },
    [updateFn, initialValue]
  );

  return [value, update, isUpdating] as const;
};
