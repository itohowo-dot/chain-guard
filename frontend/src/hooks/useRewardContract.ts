import { usechain-guardReward } from '@/lib/web3/useSmetReward';

interface UseRewardContractProps {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export function useRewardContract(options: UseRewardContractProps = {}) {
  // Backwards-compatible hook wrapper delegating to the new centralized Web3
  // integration layer (`usechain-guardReward`). Keeping this wrapper preserves public
  // API compatibility for consumers while allowing gradual migration to the
  // new implementation.
  return usechain-guardReward({ onSuccess: options.onSuccess, onError: options.onError });
}
