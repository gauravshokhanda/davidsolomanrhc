export async function POST(req: Request) {
  try {
    const body = await req.json();
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyfBTkVj5PuD55aTdaoOSAG1vyVn4Hxe7d9wL3TM7zILrtzfvQ8DKsQBuNSZMkS7Wih/exec";

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
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
    console.error("Proxy error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
