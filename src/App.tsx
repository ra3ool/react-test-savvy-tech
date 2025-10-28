import { Button } from '@/components/ui/button';
import { CheckCheck } from 'lucide-react';

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>
        <CheckCheck />
      </Button>
    </div>
  );
}

export default App;
