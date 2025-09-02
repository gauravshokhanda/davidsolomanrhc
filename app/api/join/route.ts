export async function POST(req: Request) {
  try {
    const body = await req.json();
    const scriptUrl = "https://script.google.com/macros/s/AKfycbxqlt4fa1VjXxQ5QniYr9V-J71GoSd-kCd2sbnAHLNZbpw40a3wleyjRdAhz6D7b8vRpw/exec";

    // Add form type to distinguish between contact and join submissions
    const joinData = {
      ...body,
      formType: 'join'
    };

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(joinData),
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Join form proxy error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}