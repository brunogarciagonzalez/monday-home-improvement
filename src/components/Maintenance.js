import React, { Component } from "react";
import { Header } from "semantic-ui-react";

class Maintenance extends Component {
  render() {
    return (
      <div>
        <Header as="h2" style={{ textAlign: "center" }}>
          Home Maintenance Checklist
        </Header>
        <p>
          <p>Monthly</p>
          <ul>
            <li>
              Fire Extinguisher: Check that it is fully charged; charge or
              replace if needed.
            </li>
            <li>Sink/Tubs Stoppers and drain holes: Clean out debris.</li>
            <li>Garbage Disposal: Flush with hot water and baking soda.</li>
            <li>
              Water Softener: Check water softener salt drum and replenish salt
              if necessary.
            </li>
            <li>
              Forced Air-Heating System: Change filter once a month if user's
              manual recommends fiberglass filters.
            </li>
          </ul>
          <p>Every 2 Months</p>
          <ul>
            <li>Wall Furnace: Clean grills.</li>
            <li>Range Hood: Clean grease filter. </li>
          </ul>
          <p>Every 3 Months</p>
          <ul>
            <li>Faucet: Clean aerator.</li>
            <li>
              Tub Drain Assembly: Clean out debris; inspect rubber seal and
              replace if needed.
            </li>
            <li>Floor and Outdoor Drain Grates: Clean out debris.</li>
          </ul>
          <p>Every 6 Months</p>
          <ul>
            <li>Smoke Detector: Test batteries and replace if needed.</li>
            <li>Toilet: Check for leaks and water run-on.</li>
            <li>
              Interior Caulking: Inspect caulking around tubs, showers, and
              sinks; replace any (if deteriorating).
            </li>
            <li>
              Forced Air-Heating System: Change semi-annually if user's manual
              recommens high efficiency pleated or HEPA-style filters.
            </li>
            <li>Garbage Disposal: Tighten drain connections and fasteners.</li>
            <li>
              Clothes Washer: Clean water inlet filters; check hoses and replace
              them if they are leaking.
            </li>
            <li>
              Wiring: Check for frayed cords and wires; repair or replace them
              as needed.
            </li>
            <li>Range Hood: Wash fan blades and housing.</li>
          </ul>
          <p>Every Spring</p>
          <ul>
            <li>
              Roof: Inspect roof surface, flashing, eaves, and soffits; repair
              if needed.
            </li>
            <li>
              Gutters and Downspouts: Clean them out. Inspect and repair weak
              areas; check for proper drainage and make repairs if needed.
            </li>
            <li>Siding: Inspect and clean siding and repair if needed.</li>
            <li>
              Exterior caulking: Inspect caulking and replace any that is
              deteriorating.
            </li>
            <li>
              Windowsills, Doorsills, Thresholds: Fill cracks, caulk edges,
              repaint, replace if needed.
            </li>
            <li>
              Window and Door Screens: Clean screening and repair or replace if
              needed; tighten or repair any loose or damaged frames and repaint
              if needed; replace broken, worn, or missing hardware; tighten and
              lubricate door hinges and closers.
            </li>
          </ul>
          <p>Every Fall</p>
          <ul>
            <li>
              Roof: Inspect roof surface, flashing, eaves, and soffits; repair
              if needed.
            </li>
            <li>
              Gutters and Downspouts: Clean out. Inspect and repair weak points;
              check for proper slope.
            </li>
            <li>
              Chimney or Stovepipe: Clean flue (more frequently if needed);
              repair any cracks in flue or any loose or crumbling mortar.
            </li>
            <li>Siding: Inspect and clean siding and repair if needed.</li>
            <li>
              Exterior Caulking: Inspect caulking and replace any that is
              deteriorating.
            </li>
            <li>
              Storm Windows and Doors: Replace any cracked or broken glass;
              tighten or repair any loose or damaged frames and repaint if
              needed. Replace damaged hardware; tighten and lubricate door
              hinges and closers.
            </li>
            <li>
              Window and Door Weather Stripping: Inspect and repair or replace
              if it is deteriorating or if it does not seal.
            </li>
            <li>
              Thermostat: Clean heat sensor, contact points, and contacts; check
              accuracy and replace thermostat if it is not functioning properly.
            </li>
            <li>
              Outdoor Faucets: If you live in an area with freezing winters,
              shut off valves to outdoor faucets. Open spigots and drain, store
              hoses.
            </li>
          </ul>
          <p>Annually</p>
          <ul>
            <li>
              Septic Tank: Have a professional check the tank (watch for backup
              throughout the year). In many areas, it is recommended that the
              tank be pumped every year.
            </li>
            <li>
              Main Cleanout Drain: Have a "rooter" professional clean out the
              main line, particularly if there are mature trees in your yard
              whose roots could have cracked the pipe in their search for
              moisture.
            </li>
            <li>
              Water Heater: Drain water until it is clear of sediment; test
              temperature pressure relief valve; clean burner and ports (gas
              heater).
            </li>
            <li>
              HVAC System: Have a professional tune up your heat/air
              conditioning system.
            </li>
          </ul>
        </p>
      </div>
    );
  }
}

export default Maintenance;
