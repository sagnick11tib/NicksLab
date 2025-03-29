type WakatimeRes = {
    data: {
      decimal: string;
      digital: string;
      is_up_to_date: boolean;
      percent_calculated: number;
      range: {
        end: string;
        end_date: string;
        end_text: string;
        start: string;
        start_date: string;
        start_text: string;
        timezone: string;
      };
      text: string;
      timeout: number;
      total_seconds: number;
    };
  };

export const getCodingHrsFromWaka = async () => {
    const res = await fetch(
        "https://wakatime.com/api/v1/users/current/all_time_since_today",
        {
            headers: {
                Authorization: `Basic ${Buffer.from(process.env.WAKATIME_API_KEY || "").toString(
                  "base64",
                )}`,
            },
        }
    );

    if (!res.ok)  console.log(`HTTP error! status: ${res.status}`);
    else {
        const data: WakatimeRes = await res.json();
    
        return {
            seconds: data.data.total_seconds,
        }
    }
}