import React from "react";
import PropTypes from "prop-types";

/**
 * @param {Object} props - The properties passed on to this component.
 * @param {get} props.get - Gets a key of the timer object.
 */
function Progress({ get }) {
	if(!get("sessionStarted")) return null;

	const currMode = get("focus") ? "focus" : "break";
	const time = 100 - (100 * (get(`${currMode}TimeLeft`) / get(`${currMode}Time`)));

	return (
		<div className="row mb-2">
			<div className="col">
				<div className="progress" style={{ height: "20px" }}>
					<div
						className="progress-bar"
						role="progressbar"
						aria-valuemin="0"
						aria-valuemax="100"
						aria-valuenow={time}
						style={{ width: `${time}%` }}
					/>
				</div>
			</div>
		</div>
	);
}

Progress.propTypes = {
	get: PropTypes.func.isRequired,
};

export default Progress;