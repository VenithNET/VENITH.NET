<?php
header('Content-Type: application/json');

$counterFile = 'counter_data.json';

// Initialize if file doesn't exist
if (!file_exists($counterFile)) {
    $initialData = [
        "views" => 0,
        "hits" => 0,
        "created_at" => gmdate("D, d M Y 00:00:00", strtotime("2019-01-01")) . " -0000",
        "last_updated" => gmdate("D, d M Y H:i:s") . " -0000"
    ];
    file_put_contents($counterFile, json_encode($initialData));
}

// Load and update counter
$data = json_decode(file_get_contents($counterFile), true);
$data['views'] += 1;
$data['hits'] += 1;
$data['last_updated'] = gmdate("D, d M Y H:i:s") . " -0000";

// Save updated data
file_put_contents($counterFile, json_encode($data));

// Build response
$response = [
    "result" => "success",
    "info" => [
        "sitename" => "venith",
        "views" => $data['views'],
        "hits" => $data['hits'],
        "created_at" => $data['created_at'],
        "last_updated" => $data['last_updated'],
        "domain" => "venith.net",
        "tags" => ["kirby", "2000s", "music", "personal", "90s"]
    ]
];

echo json_encode($response, JSON_PRETTY_PRINT);
?>
