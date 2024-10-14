import cls from "classnames";
import { Link, useLoaderData } from "react-router-dom";

export function Farmers() {
  const farmers = useLoaderData();
  return (
    <>
      <h1 className="page-title">Farmers</h1>
      <div
        className={cls("card-grid", {
          "card-grid-3-columns-grid": farmers.length === 3,
          "card-grid-2-columns-grid": farmers.length < 3,
        })}
      >
        {farmers.map((farmer) => (
          <div key={farmer.id} className="card-farmers">
            <div className="card-header">{farmer.name}</div>

            <div className="card-footer">
              <Link to={farmer.id.toString()} className="btn-view">
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
