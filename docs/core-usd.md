# USD Nodes

## Node Listing

Flow:
- vUSDSwitch
- vUSDWireless

## Node Docs

### vUSDSwitch

Switch between Fusion OpenUSD scenegraph objects

The "Which" control uses an integer number that starts at 1 and counts upwards to define the input connection port that is passed through to the output connection.

If you are using a logical comparator that works on a false/true based 0-1 number range and want to connect it to a vUSDSwitch node's Which input connection, that works on a 1+ number range, simply insert a vNumberAdd node set to increment the number upwards by 1.

The "Show Which Input" checkbox is used to hide the Number datatype based input connection for the Which parameter in the Nodes view.

The "Show Active Input" checkbox is used as a visualization and diagnostics mode. When enabled, this control automatically toggles the visibility off for the inactive connection wirelines fed into the switch node. This approach makes it possible to visually see in a quick glance the source comp branch that is selected as the input and used by the Which control. All other inputs will be turned into hidden wireless inputs when not in use.

![vUSDSwitch](Images/Nodes/vUSDSwitch.png)

### vUSDWireless

Create wireless links between Fusion OpenUSD scenegraph objects

The vUSDWireless node allows you to connect to other USD based nodes in your comp without drawing the connection wirelines visually in the Flow/Nodes view. This can be helpful if you need to reduce clutter.

![vUSDWireless](Images/Nodes/vUSDWireless.png)
