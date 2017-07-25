// Game version
var GAME_VERSION = 0.13;

// Send incremental updates to server?
var INC_UPDATES = true;

// Used to set async parameter for all server requests.
var ASYNC_REQUIRED = true;
var ASYNC_OPTIONAL = false;

// Drawing parameters
var CURVE_THRESHOLD = 0.005; // Max overshoot from curve momentum.
var MARKER_RADIUS_DEFAULT = 6.0;
var MARKER_RADIUS_LARGE = 8.0;
var MARKER_RADIUS_HUGE = 12.0;
var MARKER_MERGE_DELTA = 4.0;
var STATION_MARKER_LARGE_THRESHOLD = 3; // Number of groups needed to force a large station marker
var STATION_MARKER_HUGE_THRESHOLD = 4;
var STATION_MARKER_SCALE_THRESHOLD = 6;
var TRACK_WIDTH = 6.0;
var TRACK_OFFSET = 6.0;
var TRANSFER_WIDTH = 3.0;
var TRANSFER_PREVIEW_OPACITY = 0.75;
var MAX_TRANSFER_DISTANCE_MILES = 0.25;

var USE_CURVED_TRACKS = true;
var CURVE_OVERSHOOT = 0.5;
var BEZIER_SHARPNESS = 0.4;

var DGGRID_AREA = 0.0733633;
var MAX_ZOOM = 16;
var MIN_ZOOM = 6;
var START_ZOOM = 13;

var MIN_ZOOM_FOR_HEXAGONS = 13;

var DEBUG_MODE = false;

// Map rendering parameters
var SHARED_STRETCH_THRESHOLD = 8; // Max number of "local" stations in a shared stretch.

// Geocoding parameters
var ENC_NEIGHBORHOODS_ALWAYS_LABEL = ['Astoria'];
var ENC_NEIGHBORHOODS_ONLY_LABEL = ['Roosevelt Island', 'Governors Island', 'Randall\'s Island', 'North Brother Island', 'South Brother Island', 'Rikers Island', 'John F. Kennedy International Airport', 'Floyd Bennett Field', 'LaGuardia Airport'];
var ENC_LANDMARKS_ONLY_LABEL = ['Ellis Island', 'Liberty Island', 'Governors Island', 'Grand Army Plaza', 'Bartel Pritchard Square', 'Mets-Willets Point'];
ENC_LANDMARKS_NEVER_LABEL = ['JFK Airport', 'LaGuardia Airport']; // These are covered by the neighborhood name

var TRANSFER_BUTTON_DEFAULT = "Start Transfer"
var TRANSFER_BUTTON_START = "Click a station"
var TRANSFER_BUTTON_END = "Click another station"

// Instructions for calculate_ridership function
var RIDERSHIP_ADD = 0;
var RIDERSHIP_NOCHANGE = 1;
var RIDERSHIP_DELETE = 2;

// Employment modifiers
// Data from NYCEDC
var PERCENTAGE_EMPLOYMENT_TRIPS = 0.20;
var EMPLOYMENT_BY_BOROUGH_MODIFIERS = {"Staten Island": 1.0, "Queens": 5.551, "Brooklyn": 5.606, "Bronx": 2.476, "Manhattan": 22.189}

// Transit modifiers
var TRANSIT_MODIFIERS = {
    "John F. Kennedy International Airport": 35000,
    "LaGuardia Airport": 25000
}

// Custom lines
var CUSTOM_LINE_FIRST_INDEX = 97;

var FOLLOW_STREET_MOVE_THRESH = 20

var PIN_DISTANCE_MIN = 16;
var PIN_DISTANCE_FROM_STATION_MIN = 8;
var PIN_DISTANCE_TO_SHOW_PINS = 100;
var PIN_DISTANCE_FROM_EXISTING_PIN_MIN = 40;

var INACTIVE_OPACITY = 0.25;

var BEZIER_LUT_STEPS = 100;

var STATION_MERGE_THRESHOLD = 8;
var ALLOW_STATION_MERGING = true;
var SERVICE_MODES_ENABLED = false;

var PIN_ICON = L.icon({
    iconUrl: 'static/img/pin.png',
    iconSize: [30, 25],
    iconAnchor: [15, 25]
});

var DEFAULT_LINE_BG = "#808183";
var DEFAULT_LINE_FG = "#FFF";

HEXAGON_SCALES = {
    "population": chroma.scale('YlGnBu').domain([1,0]),
    "employment": chroma.scale('YlOrRd').domain([1,0])
};
HEXAGON_UNITS = {
    "population": "persons / mile<sup>2</sup>",
    "employment": "jobs /  mile<sup>2</sup>"
};

var DEBUG_BEZIER_CONTROLS = false;
var DEBUG_PIN_PROJECTIONS = false;