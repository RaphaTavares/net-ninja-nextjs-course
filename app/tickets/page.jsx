import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link"

export default function Tickets() {

  return (
    <main>
      <nav style={{ position: "relative" }}>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets.</small></p>
        </div>
        <Link href={`/tickets/create`}>
        <button
        className="btn-primary"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "8px 12px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          New Ticket
        </button>
        </Link>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
