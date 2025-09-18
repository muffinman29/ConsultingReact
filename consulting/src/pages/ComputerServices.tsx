function ComputerServices() {
  return (
      <div style={{ paddingTop: '10px', height: '100vh' }}>
        <h1>Computer Services</h1>
        <section>
          <p>
            We offer a variety of computer services to help you maintain and
            optimize your devices. Whether you need in-store or remote
            assistance, our experienced technicians are here to help.
          </p>
          <p>We service Windows computers.</p>
          <p>Call us to determine the best service for your computer needs.</p>
        </section>
        <table className="table store-table">
          <thead>
            <tr>
              <th colSpan={2}>In-store services</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Virus Removal and Operating System Repair</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>Hardware Diagnostics</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>Software Installation</td>
              <td>$30</td>
            </tr>
            <tr>
              <td>Data Backup or Transfer</td>
              <td>$60</td>
            </tr>
            <tr>
              <td>System Tune-Up</td>
              <td>$60</td>
            </tr>
            <tr>
              <td>Hardware Installation</td>
              <td>$30</td>
            </tr>
          </tbody>
        </table>

        <table className="table store-table">
          <thead>
            <tr>
              <th colSpan={2}>Remote services</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Virus Removal and Operating System Repair</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>Software Setup and Troubleshooting</td>
              <td>$30</td>
            </tr>
            <tr>
              <td>System Tune-Up</td>
              <td>$60</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}
export default ComputerServices;
