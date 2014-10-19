---
layout: pagelayout
permalink: /tools/report-absence/index.html
title: Report an Absence
---
<br>
<div class="container">
	<div class="row">
        <div class="col-lg-8">
			<h3>Reporting an Absence</h3>
			<p>
				It happens to the best of us.<br />
				If your Child is feeling poorly, and you don't think you can send them in or something else is the matter, instead of giving us a phone-call you can submit the form to your right, which will tell our computer to skip them from registration.  Just please remember to send in a sick-note when they're back.<br />
				<b>Disclaimer:</b> Please do not use this form for impromptu holidays.  Holidays during term-time must be pre-approved, and booked in advance.
			</p>
		</div>
		<div class="col-lg-4">
			<form role="form" class="form-horizontal">
				<div class="form-group">
					<label for="phone-number">Phone number</label>
					<input type="tel" class="form-control" id="phone-number" placeholder="Enter phone-number">
				</div>
				<div class="form-group">
					<label for="pupil-name">Pupil Name</label>
					<input type="text" class="form-control" id="pupil-name" placeholder="Name of pupil">
				</div>
				<div class="form-group">
					<label for="pupil-id">Pupil ID</label>
					<input type="text" class="form-control" id="pupil-id" placeholder="Student ID number">
				</div>
				<div class="form-group">
					<label for="pupil-dob">Pupil Date of Birth</label>
					<div class="input-group date" id="datepicker">
						<input id="pupil-dob" type='text' class="form-control"></input>
						<span class="input-group-addon">
							<span class="glyphicon glyphicon-calendar"></span>
						</span>
					</div>
				</div>
				<div class="form-group">
					<div class="checkbox pull-left col-xs-9">
						<label>
							<input type="checkbox"> I am a parent/guardian of this child and am responsible for them.
						</label>
					</div>
				</div>
				<button type="submit" class="btn btn-default pull-right col-xs-3">Submit</button>
			</form>
		</div>
	</div>
</div>

<script type="text/javascript">
	defer();
	function defer() {
	    if (window.$) {
	    	console.log("suck a million dicks");
			$("<link/>", {
				rel: "stylesheet",
				type: "text/css",
				href: "//cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/master/build/css/bootstrap-datetimepicker.min.css"
			}).appendTo("head");
			$.getScript("//eonasdan.github.io/bootstrap-datetimepicker/scripts/moment.js", function() {
				$.getScript("//cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/master/src/js/bootstrap-datetimepicker.js", function() {
						$('#datepicker').datetimepicker({
							pickTime:	false,
							useMinutes:	false,
							useSeconds:	false
						});				
				});
			});
	    } else {
	    	console.log("suck a trillion dicks");
	        setTimeout(function() { 
	        	defer();
	        }, 50);
	    }
	}
</script>