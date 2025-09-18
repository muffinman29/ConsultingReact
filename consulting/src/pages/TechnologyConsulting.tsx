function TechnologyConsulting() {
  return (
    <div style={{ paddingTop: '10px', height: '100vh' }}>
      <h1>Technology Consulting Services</h1>
      <p>
        We provide expert advice to help you make the most of your technology
        investments.
      </p>

      <table className="table store-table">
        <thead>
          <tr>
            <th colSpan={2}>Service</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Software Development</td>
            <td>$100.00/hr</td>
          </tr>
          <tr>
            <td>Technology Assessment and Recommendations</td>
            <td>$120.00/hr</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TechnologyConsulting;
