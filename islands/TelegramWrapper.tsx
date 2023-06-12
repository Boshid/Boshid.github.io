import {useTelegram} from "../hooks/useTelegram.ts";

export default function TelegramWrapper() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])
}
