
**Google Certified         Associate Cloud Engineer![ref1]**

1![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.002.png)

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.003.png)

![ref1]


**Getting Started ![ref1]**

![ref2] ![ref3] ![ref4] ![ref5] ![ref6] ![ref7]

- GCP has 200+ services. This exam expects knowledge of 40+ Services.
- Exam expects **in-depth knowledge** about these services
- Exam tests your **decision making abilities**:
  - Which service do you choose in which situation?
  - This course is **designed** to give you in-depth knowledge & make tough choices
  - **Our Goal** : Enable you to understand and use GCP in your real world projects!

2![ref8]

**How do you put your best foot forward? ![ref1]**

- **Challenging  certification**  -  Expects ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.011.jpeg)you to understand and **REMEMBER**  a number of services 
  - As time passes, humans forget things. 
- How do you improve your chances of remembering things? 
  - **Active learning** - think and take notes 
    - **Review**  the  presentation  every  once  in  a while 

3![ref8]

**Our Approach ![ref1]**

- Three-pronged  approach  to  reinforce ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.012.png)concepts: 
  - Presentations (Video) 
    - Demos (Video) 
      - **Two kinds of quizzes**: 
        - Text quizzes 
          - Video quizzes 
  - (Recommended)  Take  your  time.  Do not hesitate to replay videos! 
    - (Recommended) Have Fun! 

4![ref8]

**GCP - Getting started![ref1]**

5![ref8]

**Before the Cloud - Example 1 - Online Shopping App ![ref1]**

![ref9]

- Challenge:
  - Peak usage during holidays and weekends
    - Less load during rest of the time
  - Solution (before the Cloud):
    - **PEAK LOAD provisioning** : **Procure** (Buy) infrastructure **for peak load**
      - What would the infrastructure be doing during periods of low loads?

6![ref8]

**Before the Cloud - Example 2 - Startup ![ref1]**

![ref9]

- Challenge:
  - Startup suddenly becomes popular
    - How to handle the **sudden increase** in load?
  - Solution (before the Cloud):
    - **Procure** (Buy) infrastructure assuming they would be successful
      - What if they are not successful?

7![ref8]

**Before the Cloud - Challenges ![ref1]**

![ref9]

- High cost of procuring infrastructure
  - Needs ahead of time planning (**Can you guess the future?**)
    - Low infrastructure utilization (**PEAK LOAD** provisioning)
    - Dedicated infrastructure maintenance team (**Can a startup afford it?**)

8![ref8]

**Silver Lining in the Cloud ![ref1]**

- How about **provisioning (renting) resources** when you want ![ref10]them and releasing them back when you do not need them? 
  - **On-demand resource provisioning** 
    - Also called **Elasticity** 

9![ref8]

**Cloud - Advantages ![ref1]**

- Trade **"capital expense"** for **"variable expense" ![ref10]**
  - Benefit from massive **economies of scale** 
    - Stop **guessing** capacity 
- Stop spending money running and maintaining data centers 
  - **"Go global"** in minutes

10![ref11]

**Google Cloud Platform (GCP) ![ref1]**

- **One of the Top 3** cloud service providers ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.016.png)
  - Provides a number of services (200+) 
    - Reliable, secure and highly-performant: 
      - Infrastructure  that  powers  8  services  with  over  1  Billion  Users:  Gmail, Google Search, YouTube etc 
      - One thing I love : **"cleanest cloud"** 
        - Net carbon-neutral cloud (electricity used matched 100% with renewable energy)
        - The entire course is all about GCP. You will learn it as we go further.

11![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.017.png)

**Best path to learn GCP! ![ref1]**

![ref2] ![ref3] ![ref4] ![ref5] ![ref6] ![ref7]

- Cloud applications make use of multiple GCP services
  - There is **no single path** to learn these services independently
    - HOWEVER, we've worked out a simple path!

12![ref11]

**Setting up GCP Account ![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.018.png) Create GCP Account

13![ref11]

**Regions and Zones![ref1]**

14![ref11]

**Regions and Zones ![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.019.png)

- Imagine that your application is deployed in a data center in London
  - What would be the challenges?
    - Challenge 1 : Slow access for users from other parts of the world (**high latency**)
      - Challenge 2 : What if the data center crashes?
        - Your application goes down (**low availability**)

15![ref11]

**Multiple data centers![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.020.png)

- Let's **add in one more data center** in London
  - What would be the challenges?
    - Challenge 1 : Slow access for users from other parts of the world
      - Challenge 2 (**SOLVED**) : What if one data center crashes?
        - Your application is **still available** from the other data center
        - Challenge 3 : What if **entire region** of London is unavailable?
          - Your application goes down

16![ref11]

**Multiple regions![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.021.png)

- Let's add a new region : Mumbai
- What would be the challenges?
  - Challenge 1 (**PARTLY SOLVED**) : Slow access for users from other parts of the world
    - You can solve this by adding deployments for your applications in other regions
    - Challenge 2 (SOLVED) : What if one data center crashes?
      - Your application is still live from the other data centers
      - Challenge 3 (**SOLVED**) : What if entire region of London is unavailable?
        - Your application is served from Mumbai

17![ref11]

**Regions ![ref1]**

- Imagine  setting  up  data  centers  in ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.022.png)different regions around the world 
  - **Would that be easy?** 
  - (Solution)  Google  provides  **20+ regions** around the world 
    - Expanding every year 
    - **Region**  :  Specific  geographical location to host your resources 
      - **Advantages**: 
        - High Availability
          - Low Latency
          - Global Footprint
        - Adhere to government **regulations**

18![ref11]

**Zones ![ref1]**

- How to achieve high availability in the same ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.023.png)region (or geographic location)? 
  - Enter **Zones** 
  - Each Region has three or more **zones** 
    - (Advantage)  **Increased  availability and  fault tolerance** within same region 
  - (Remember)  Each  Zone  has  **one  or  more discrete clusters** 
    - **Cluster** : distinct physical infrastructure that is housed in a data center 
    - (Remember) Zones in a region are connected through **low-latency** links 

19![ref11]

**Regions and Zones examples ![ref1]**

New Regions and Zones are constantly added![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.024.png)

**Region Code Region Zones Zones List us-west1![ref12]** The Dalles, Oregon, North America 3 us-west1-a  

us-west1-b us-west1-c![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.026.png)

**europe-north1** Hamina, Finland, Europe 3 europe-north1-a, europe-north1-b 

europe-north1-c![ref12]

**asia-south1** Mumbai, India APAC 3 asia-south1-a, asia-south1-b  

asia-south1-c![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.027.png)

20![ref11]

**Compute![ref1]**

21![ref11]

**Compute Engine Fundamentals![ref1]**

22![ref11]

**Google Compute Engine (GCE) ![ref1]**

- In  corporate  data  centers,  applications  are  deployed  to ![ref2]physical servers 
  - Where do you deploy applications in the cloud? 
    - Rent virtual servers 
      - **Virtual Machines** - Virtual servers in GCP
        - **Google Compute Engine (GCE)** - Provision & Manage Virtual Machines

23![ref11]

**Compute Engine - Features ![ref1]**

![ref2] ![ref13] ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.029.png)

- Create and manage lifecycle of Virtual Machine (VM) instances
  - **Load balancing** and **auto scaling** for multiple VM instances
    - **Attach storage** (& network storage) to your VM instances
      - Manage **network connectivity and configuration** for your VM instances
        - **Our Goal**:
          - Setup VM instances as HTTP (Web) Server
            - Distribute load with Load Balancers

24![ref11]

**Compute Engine Hands-on ![ref1]**

- Let's create a few VM instances and play with them ![ref14]
  - Let's check out the lifecycle of VM instances 
    - Let's use SSH to connect to VM instances 

25![ref11]

**Compute Engine Machine Family ![ref1]**

- What type of hardware do you want to run your workloads on? ![ref14]
  - Different Machine Families for Different Workloads: 
    - **General Purpose (E2, N2, N2D, N1)** : Best price-performance ratio 
      - Web and application servers, Small-medium databases, Dev environments 
    - **Memory Optimized (M2, M1)**: Ultra high memory workloads
      - Large in-memory databases and In-memory analytics
    - **Compute Optimized (C2)**: Compute intensive workloads
      - Gaming applications

26![ref11]

**Compute Engine Machine Types ![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.031.png)

- How much CPU, memory or disk do you want?
  - Variety of machine types are available for each machine family
    - Let's take an example : **e2-standard-2**:
      - **e2** - Machine Type Family
        - **standard** - Type of workload
          - **2** - Number of CPUs
  - Memory, disk and networking capabilities increase along with vCPUs

27![ref11]

**Image ![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.032.png) ![ref15] ![ref16]

- What operating system and what soware do you want on the instance?
  - Type of Images:
    - **Public Images**: Provided & maintained by Google or Open source communities or third party vendors
      - **Custom Images**: Created by you for your projects

28![ref11]

**Compute Engine Hands-on : Setting up a HTTP server ![ref1]**

#! /bin/bash 

sudo su 

apt update  

apt -y install apache2 

sudo service apache2 start 

sudo update-rc.d apache2 enable 

echo "Hello World" > /var/www/html/index.html 

echo "Hello world from $(hostname) $(hostname -I)" > /var/www/html/index.html 

- Commands:
  - sudo su - execute commands as a root user
    - apt update - Update package index - pull the latest changes from the APT repositories
  - apt -y install apache2 - Install apache 2 web server
    - sudo service apache2 start - Start apache 2 web server
      - echo "Hello World" > /var/www/html/index.html - Write to index.html
        - $(hostname) - Get host name
      - $(hostname -I) - Get host internal IP address

29![ref11]

**Internal and External IP Addresses ![ref1]**

- **External** (Public) IP addresses are **Internet addressable**. ![ref14]
  - **Internal** (Private) IP addresses are **internal** to a corporate network 
    - You  CANNOT  have  two  resources  with  same  public  (External)  IP address. 
      - HOWEVER, two different corporate networks CAN have resources with same Internal (private) IP address
      - All **VM instances** are assigned at least one Internal IP address
        - Creation of External IP addresses can be enabled for VM instances
          - (Remember) When you stop an VM instance, External IP address is lost
          - **DEMO**: VM instances - Internal and External IPs

30![ref11]

**Static IP Addresses ![ref1]**

- Scenario : How do you get a constant External IP address for a VM ![ref14]instance? 
  - Quick and dirty way is to assign an Static IP Address to the VM! 
  - **DEMO**: Using Static IP Address with an VM instance 

31![ref11]

**Static IP Addresses - Remember ![ref1]**

- Static IP **can be switched** to another VM instance in same project ![ref14]
  - Static IP **remains attached** even if you stop the instance. You have to manually detach it. 
    - Remember : You are **billed for** an Static IP when **you are NOT using it**! 
      - Make sure that you explicitly release an Static IP when you are not using it.

32![ref11]

**Simplify VM HTTP server setup ![ref1]**

- How do we **reduce** the **number of steps** in creating an VM instance ![ref14]and setting up a HTTP Server? 
  - Let's explore a few options: 
    - **Startup script** 
      - **Instance Template**
        - **Custom Image**

33![ref11]

**Bootstrapping with Startup script ![ref1]**

#!/bin/bash 

apt update  

apt -y install apache2 

echo "Hello world from $(hostname) $(hostname -I)" > /var/www/html/index.html 

- **Bootstrapping**:  Install  OS  patches  or  soware  when  an  VM  instance  is launched.
  - In VM, you can configure **Startup script** to bootstrap
    - **DEMO** - Using Startup script

34![ref11]

**Instance templates ![ref1]**

- Why do you need to specify all the VM instance details (Image, ![ref17]instance type etc) **every time** you launch an instance? 
  - How about creating a **Instance template**? 
    - Define **machine type, image, labels, startup script** and other properties ![ref18]
  - Used to create **VM instances** and **managed instance groups ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.037.png)**
    - Provides a **convenient way** to create similar instances 
    - **CANNOT** be updated ![ref18]
      - To make a change, copy an existing template and modify it 
      - (Optional) Image family can be specified (example - debian-9): 
        - Latest non-deprecated version of the family is used ![ref19]
        - **DEMO** - Launch VM instances using Instance templates 

35![ref11]

**Reducing Launch Time with Custom Image ![ref1]**

- Installing OS patches and soware at launch of VM instances ![ref17]**increases boot up** time 
  - How  about  creating  a  custom  image  with  OS  patches  and ![ref18]soware **pre-installed**? 
    - Can be created from an instance, a persistent disk, a snapshot, another ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.039.png)image, or a file in Cloud Storage 
      - Can be shared across projects 
        - (Recommendation) Deprecate old images (& specify replacement image) ![ref18]
        - (Recommendation)  **Hardening  an  Image**  -  Customize  images  to  your corporate security standards ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.040.png)
    - **Prefer** using **Custom Image** to **Startup script** 
      - **DEMO**  :  Create  a  Custom  Image  and  using  it  in  an  Instance Template

36![ref11]

**Sustained use discounts ![ref1]**

- **Automatic discounts** for running VM instances ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.041.png)for significant portion of the billing month 
  - Example:  If  you  use  N1,  N2  machine  types  for  more than 25% of a month, you get a 20% to 50% discount on every incremental minute. 
    - Discount increases with usage (graph) 
    - No action required on your part! 
  - **Applicable**  for  instances  created  by  **Google Kubernetes Engine** and **Compute Engine** 
    - **RESTRICTION**:  Does  NOT  apply  on  certain machine types (example: E2 and A2) 
      - **RESTRICTION**: Does NOT apply to VMs created Source: [**https://cloud.google.com** ](https://cloud.google.com/)by App Engine flexible and Dataflow

37![ref11]

**Committed use discounts ![ref1]**

- For workloads with **predictable resource** needs ![ref14]
  - **Commit** for 1 year or 3 years 
    - **Up to 70% discount** based on machine type and GPUs 
      - **Applicable** for instances created by **Google Kubernetes Engine** and **Compute Engine**
        - **RESTRICTION**: Does NOT apply to VMs created by App Engine flexible and Dataflow

38![ref11]

**Preemptible VM ![ref1]**

- **Short-lived cheaper** (upto 80%) compute instances ![ref14]
  - Can be stopped by GCP any time (preempted) within 24 hours 
    - Instances get 30 second warning (to save anything they want to save) 
  - **Use Preempt VM's** if: 
    - Your applications are **fault tolerant**
      - You are very **cost sensitive**
      - Your workload is **NOT immediate**
    - Example: Non immediate batch processing jobs
    - **RESTRICTIONS**:
      - NOT always available
        - NO SLA and CANNOT be migrated to regular VMs
          - NO Automatic Restarts
          - Free Tier credits not applicable

39![ref11]

**Google Compute Engine - Billing ![ref1]**

- You are **billed by the second** (aer a minimum of 1 minute) ![ref14]
  - You are NOT billed for compute when a compute instance is stopped 
    - However, you will be billed for any storage attached with it! 
    - (RECOMMENDATION) **Always create Budget alerts** and make use of Budget exports to stay on top of billing!
      - What are the ways you can save money?
        - Choose the right machine type and image for your workload
          - Be aware of the discounts available:
            - Sustained use discounts
              - Committed use discounts ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.042.png) Discounts for preemptible VM instances

40![ref11]

**Compute Engine : Live Migration & Availability Policy ![ref1]**

- How do you keep your VM instances running when a host system needs to be updated (a soware or a hardware update needs to be performed)?
  - **Live Migration**
    - Your running instance is migrated to another host in the same zone
      - Does NOT change any attributes or properties of the VM
        - SUPPORTED for instances with local SSDs
          - NOT SUPPORTED for GPUs and preemptible instances
    - Important Configuration - **Availability Policy**:
      - **On host maintenance**: What should happen during periodic infrastructure maintenance?
        - Migrate (default): Migrate VM instance to other hardware
          - Terminate: Stop the VM instance
      - **Automatic  restart**  -  Restart  VM  instances  if  they  are  terminated  due  to  non-user-initiated reasons (maintenance event, hardware failure etc.)

41![ref11]

**Compute Engine Features: Custom Machine Types ![ref1]**

- What do you do **when predefined VM options are NOT appropriate ![ref14]**for your workload? 
  - Create a machine type customized to your needs (a **Custom Machine Type**) 
  - **Custom Machine Type**: **Adjust** vCPUs, memory and GPUs 
    - Choose between E2, N2, or N1 machine types
      - Supports a wide variety of Operating Systems: CentOS, CoreOS, Debian, Red Hat, Ubuntu, Windows etc
        - **Billed per vCPUs, memory provisioned** to each instance
          - Example Hourly Price: $0.033174 / vCPU + $0.004446 / GB

42![ref11]

**Compute Engine Features: GPUs ![ref1]**

- How do you accelerate math intensive and graphics-intensive ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.043.png)workloads for AI/ML etc? 
  - Add a **GPU** to your virtual machine: 
    - High performance for math intensive and graphics-intensive workloads 
      - Higher Cost
        - (REMEMBER) Use **images with GPU libraries** (Deep Learning) installed
          - OTHERWISE, GPU will not be used
        - **GPU restriction**s:
          - **NOT supported on all machine types** (For example, not supported on shared-core or memory-optimized machine types) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.044.png) **On host maintenance** can only have the value "Terminate VM instance"
    - Recommended **Availability policy** for GPUs
      - Automatic restart - on

43![ref11]

**Virtual Machine - Remember ![ref1]**

- Associated with a **project ![ref14]**
  - Machine type **availability can vary** from region to regions 
    - You can only change the machine type (adjust the number of vCPUs and memory) of a stopped instance 
      - You CANNOT change the machine type of a running instance
      - VM's **can be filtered** by various properties
        - Name, Zone, Machine Type, Internal/External IP, Network, Labels etc
        - Instances are Zonal (Run in a **specific zone** (in a specific region))
          - Images are global (You can provide access to other projects - if needed) ![ref20] Instance templates are global (Unless you use zonal resources in your templates)
          - **Automatic Basic Monitoring** is enabled ![ref20] Default Metrics: CPU utilization, Network Bytes (in/out), Disk Throughput/IOPS
            - For Memory Utilization & Disk Space Utilization - Cloud Monitoring agent is needed

44![ref11]

**Virtual Machine - Best Practices ![ref1]**

- Choose **Zone and Region** based on: ![ref14]
  - Cost, Regulations, Availability Needs, Latency and Specific Hardware needs 
    - Distribute instances in multiple zones and regions for high availability 
  - Choose **right machine type** for you needs: 
    - Play with them to find out the right machine type
      - Use **GPUs** for Math and Graphic intensive applications
    - Reserve for **"committed use discounts"** for constant workloads
      - Use  preemptible  instances  for  fault-tolerant,  NON  time  critical workloads
        - Use **labels** to indicate environment, team, business unit etc

45![ref11]

**Compute Engine Scenarios ![ref1]**

**Scenario Solution![ref21]**

**What are the pre-requisites to be able to create a VM instance?** 1. Project  

2. Billing Account  
2. Compute Engines APIs should be enabled![ref22]

**You want dedicated hardware for your compliance,**  Sole-tenant nodes **licensing, and management needs![ref23]**

**I have 1000s of VM and I want to automate OS patch management,**  Use "VM Manager" **OS inventory management and OS configuration management (manage**

**soware installed)![ref22]**

**You want to login to your VM instance to install soware** You can SSH into it![ref21]

**You do not want to expose a VM to internet** Do NOT assign an external IP

Address![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.049.png)

**You want to allow HTTP traffic to your VM** Configure Firewall Rules![ref23]

46![ref11]

**Quick Review ![ref1]**

**Image**

- What **operating system** and what **soware** do you want on the VM instance?
  - Reduce  boot  time  and  improve  security  by  creating  custom  **hardened Images**.
    - You can share an Image with other projects

**Machine Types**

- Optimized combination of compute(CPU, GPU), memory, disk (storage) and networking for specific workloads.
  - You can **create your own Custom Machine Types** when existing ones don't fit your needs

47![ref11]

**Quick Review ![ref1]**

- **Static IP Addresses**: Get a constant IP addresses for VM instances
  - **Instance Templates**: Pre-configured templates simplifying the creation of VM instances
    - **Sustained use discounts**: **Automatic discounts** for running VM instances for significant portion of the billing month
      - **Committed use discounts**: 1 year or 3 year **reservations** for workloads with **predictable resource** needs
        - **Preemptible VM**: Short-lived cheaper (upto 80%) compute instances for non- time-critical fault-tolerant workloads

48![ref11]

**Gcloud![ref1]**

49![ref11]

**Gcloud ![ref1]**

- **Command line interface** to interact with Google Cloud Resources ![ref24]
  - Most GCP services can be managed from CLI using Gcloud: 
    - Compute Engine Virtual Machines 
      - Managed Instance Groups 
        - Databases
          - and ... many more
    - You  can  create/delete/update/read  existing  resources  and  perform actions like deployments as well!
      - (REMEMBER) SOME GCP services have specific CLI tools:
        - Cloud Storage - gsutil
        - Cloud BigQuery - bq
          - Cloud Bigtable - cbt
            - Kubernetes - kubectl (in addition to Gcloud which is used to manage clusters)

50![ref11]

**Gcloud - Getting Started ![ref1]**

**Installation**

- Gcloud is part of Google Cloud SDK
  - Cloud SDK requires Python
    - Instructions to install Cloud SDK (and Gcloud) => [**https://cloud.google.com/sdk/docs/install**](https://cloud.google.com/sdk/docs/install)
  - You can also use Gcloud on Cloud Shell

**Connecting to GCP**

- **gcloud init** - initialize or reinitialize gcloud
  - Authorize gcloud to use your user account credentials
    - Setup configuration
      - Includes current project, default zone etc
  - **gcloud config list** - lists all properties of the active configuration

51![ref11]

**gcloud config set ![ref1]**

- Sets the specified property in your active configuration ![ref24]
  - **gcloud config set core/project VALUE** 
    - **gcloud config set compute/region VALUE** 
  - **gcloud config set compute/zone VALUE** 
    - **gcloud config set core/verbosity VALUE(debug)**
  - Syntax - **gcloud config set SECTION/PROPERTY VALUE**
    - **core**, **compute** - SECTIONS
      - **project**, **region**, **zone** - PROPERTIES
    - Specifying **core** is optional as it is the default SECTION!
      - **gcloud config set project VALUE**
        - **gcloud config set verbosity VALUE(debug)**
    - Get more details with **gcloud config set --help ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.051.png)** Look for AVAILABLE PROPERTIES in the content
    - Opposite - **gcloud config unset**

52![ref11]

**Playing with gcloud config set ![ref1]**

- gcloud config set compute/region us-east2
  - gcloud config set compute/zone us-east1-b
    - gcloud config list

testing@cloudshell:~ (useful-device-303710)$ gcloud config list [component\_manager] 

disable\_update\_check = True 

[compute] 

gce\_metadata\_read\_timeout\_sec = 30 

region = us-east1 

zone = us-east1-b 

[core] 

account = testing@gmail.com 

disable\_usage\_reporting = True 

project = useful-device-303710 

verbosity = info

[metrics] 

environment = devshell 

53![ref11]

**Gcloud - Managing Multiple Configurations ![ref1]**

- Scenario:  You  are  working  on  multiple  projects  from  the  same ![ref24]machine.  You  would  want  to  be  able  to  execute  commands  using different configurations. 
  - How do you simplify this? 
    - **gcloud config configurations create/delete/describe/activate/list**
      - Create new configuration: **gcloud config configurations create NAME(dev)**
        - Activate specific configuration: **gcloud config configurations activate NAME(dev)**
          - List Configurations: **gcloud config configurations list**

54![ref11]

**gcloud command structure - Playing with Services ![ref1]**

- **gcloud GROUP SUBGROUP ACTION ...**
  - GROUP - config or compute or container or dataflow or functions or iam or ..
    - Which service group are you playing with?
  - SUBGROUP - instances or images or instance-templates or machine-types or regions or zones
    - Which sub group of the service do you want to play with?
  - ACTION - create or list or start or stop or describe or ...
    - What do you want to do?
  - **Examples**:
    - gcloud compute instances list
    - gcloud compute zones list
      - gcloud compute regions list
        - gcloud compute machine-types list
          - gcloud compute machine-types list --filter="zone:us-central1-b"
    - gcloud compute machine-types list --filter="zone:( us-central1-b europe-west1-d )"

55![ref11]

**gcloud compute instances create ![ref1]**

- Creating Compute Instances
  - **gcloud compute instances create [NAME]**
    - Options:
      - --machine-type (default type is n1-standard-1 - gcloud compute machine-types list)
        - --custom-cpu --custom-memory --custom-vm-type(n1/n2) (Custom Machine) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.052.png) --custom-cpu 6 --custom-memory 3072MB --custom-vm-type n2
          - --image or --image-family or --source-snapshot or --source-instance-template or --source-machine-image (beta)
            - --service-account or --no-service-account
              - --zone=us-central1-b
                - --tags (List of tags - Allow network firewall rules and routes to be applied to VM instances) ![ref25] --preemptible ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.054.png) --restart-on-failure(default) --no-restart-on-failure --maintenance-policy(MIGRATE(default)/TERMINATE) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.055.png) --boot-disk-size, --boot-disk-type --boot-disk-auto-delete(default) --no-boot-disk-auto-delete ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.056.png) --deletion-protection --no-deletion-protection(default) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.057.png) --metadata/metadata-from-file startup-script/startup-script-url![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.058.png)

--metadata-from-file startup-script=/local/path/to/script/startup OR --metadata startup-script="echo 'hello world'"

- shutdown-script
- --network --subnet --network-tier (PREMIUM (default), STANDARD)
  - --accelerator="type=nvidia-tesla-v100,count=8" --metadata="install-nvidia-driver=True" (GPU)

56![ref11]

**Compute Instances - Default Region and Zone ![ref1]**

- Three Options: ![ref24]
  - Option 1 (Centralized Configuration): gcloud compute project-info add-metadata 
    - --metadata=[google-compute-default-region=REGION | google-compute-default-zone=ZONE] 
  - Option 2 (Local gcloud configuration): gcloud config set compute/region REGION 
    - Option 3 (Command Specific): --zone or --region in the command 
  - Priority:  Option  3  (if  exists)  overrides  Option  2  (if  exists)  overrides Option 1

57![ref11]

**List and Describe commands ![ref1]**

- Typically list commands are used to list a set of resources ![ref24]
  - gcloud compute RESOURCES list 
    - gcloud compute images/regions/zones/disk-types list 
      - gcloud compute instances/disks/snapshots list 
    - Most list commands support a few common options 
      - --filter="zone:VALUE"
        - --sort-by (NAME, ~NAME) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.059.png) [--uri  (**https://www.googleapis.com/compute/v1/projects/windows-sql-cloud/global/images/sql-2019-web- windows-2019-dc-v20210112**) ](https://www.googleapis.com/compute/v1/projects/windows-sql-cloud/global/images/sql-2019-web-windows-2019-dc-v20210112)![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.060.png) gcloud compute images list --sort-by NAME --filter "PROJECT:(windows-cloud ubuntu-os-cloud)"
  - Typically describe commands are used to describe a specific resource
    - gcloud compute images describe ubuntu-1604-xenial- v20210203 --project ubuntu- os-cloud
      - gcloud compute regions describe us-central1

58![ref11]

**Playing with Compute Instances - gcloud ![ref1]**

- Playing with compute instances ![ref24]
  - gcloud compute instances list/start/stop/delete/reset/describe/move 
    - gcloud compute instances start example-instance 
      - gcloud compute instances stop example-instance-1 example-instance-2 
        - gcloud compute instances delete example-instance 
          - --delete-disks=VALUE (all or data or boot)
            - --keep-disks=VALUE (all or data or boot)
          - gcloud  compute  instances  move  example-instance-1  --zone  us-central1-b  --destination-zone  us- central1-f
            - Move a VM from one zone to another

59![ref11]

**Playing with Instance Templates ![ref1]**

- gcloud compute instance-templates create/delete/describe/list ![ref24]
  - gcloud compute instance-templates create INSTANCE-TEMPLATE 
    - --source-instance=SOURCE\_INSTANCE --source-instance-zone (Which instance to create a template from?) 
      - Supports almost all options supported by **gcloud compute instances create [NAME]** 
        - --image or --image-family or --source-snapshot or --source-instance-template
          - --service-account or --no-service-account
            - --tags ![ref26] --preemptible ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.062.png) --restart-on-failure(default) --no-restart-on-failure --maintenance-policy(MIGRATE(default)/TERMINATE) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.063.png) --boot-disk-size, --boot-disk-type --boot-disk-auto-delete(default) --no-boot-disk-auto-delete ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.064.png) --deletion-protection --no-deletion-protection(default) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.065.png) --metadata/metadata-from-file startup-script/startup-script-url ![ref26] --network --subnet --network-tier (PREMIUM (default), STANDARD)
          - --accelerator="type=nvidia-tesla-v100,count=8" --metadata="install-nvidia-driver=True" (GPU)
    - Using Instance Tempate to create an instance
      - gcloud  compute  instances  create  my-test-vm  --sourc  e-instance-template=my-instance-template- with-custom-image

60![ref11]

**Instance Groups![ref1]**

61![ref11]

**Instance Groups ![ref1]**

- How do you create a group of VM instances? ![ref27]
  - **Instance  Group**  -  Group  of  VM  instances  managed  as  a  single entity 
    - **Manage group** of similar VMs having similar lifecycle as **ONE UNIT** 
  - **Two Types of Instance Groups**: 
    - **Managed** : Identical VMs created using a template: 
      - Features: Auto scaling, auto healing and managed releases 
    - **Unmanaged** : Different configuration for VMs in same group: 
      - Does NOT offer auto scaling, auto healing & other services ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.067.png) NOT Recommended unless you need different kinds of VMs
    - **Location** can be Zonal or Regional
      - Regional gives you higher availability (RECOMMENDED)

62![ref11]

**Managed Instance Groups (MIG) ![ref1]**

- **Managed  Instance  Group**  -  Identical  VMs  created ![ref27]using an **instance template** 
  - Important Features: 
    - **Maintain** certain number of instances 
      - If an instance crashes, MIG launches another instance 
    - **Detect application failures** using health checks (Self Healing) 
      - Increase and decrease instances based on load **(Auto Scaling)** 
        - Add **Load Balancer** to distribute load 
        - Create instances in multiple zones (regional MIGs)
          - Regional MIGs provide higher availability compared to zonal MIGs
        - **Release** new application versions without downtime
          - **Rolling  updates**:  Release  new  version  step  by  step  (gradually).  Update  a percentage of instances to the new version at a time.
            - **Canary  Deployment**:  Test  new  version  with  a  group  of  instances  before releasing it across all instances.

63![ref11]

**Creating Managed Instance Group (MIG) ![ref1]**

- **Instance template** is mandatory ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.068.png)
  - Configure  **auto-scaling**  to  automatically  adjust  number  of instances based on load: ![ref18]
    - **Minimum** number of instances 
      - **Maximum** number of instances 
        - **Autoscaling  metrics**:  CPU  Utilization  target  or  Load  Balancer  Utilization ![ref19]target or Any other metric from Stack Driver 
          - **Cool-down period**: How long to wait before looking at auto scaling metrics again? 
            - **Scale In Controls**: Prevent a sudden drop in no of VM instances
              - **Example**: Don't scale in by more than 10% or 3 instances in 5 minutes
      - **Autohealing**: Configure a Health check with Initial delay (How long should you wait for your app to initialize before running a health check?)
    - Time for a **Demo**

64![ref11]

**Updating a Managed Instance Group (MIG) ![ref1]**

- **Rolling update**  -  Gradual  update  of  instances  in  an ![ref27]instance group to the new instance template 
  - Specify new template: 
    - (OPTIONAL) Specify a template for canary testing 
  - Specify how you want the update to be done: 
    - When should the update happen? 
      - Start  the  update  immediately  (Proactive)  or  when  instance  group  is  resized later(Opportunistic) 
      - How should the update happen? 
        - **Maximum surge**: How many instances are added at any point in time? ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.069.png) **Maximum unavailable**: How many instances can be offline during the update?
  - **Rolling Restart/replace**: Gradual restart or replace of all instances in the group
    - No change in template BUT replace/restart existing VMs
    - Configure Maximum surge, Maximum unavailable and What you want to do? (Restart/Replace)

65![ref11]

**Playing with Managed Instance Groups - Command Line ![ref1]**

- gcloud compute instance-groups managed ![ref24]
  - **Create instance group**: create 
    - gcloud  compute  instance-groups  managed  **create**  my-mig  --zone  us-central1-a  --template  my- instance-template --size 1 
      - **--health-check**=HEALTH\_CHECK: How do you decide if an instance is healthy? 
        - **--initial-delay**: How much time should you give to an instance to start?
      - **Other similar commands** - gcloud compute instance-groups managed **delete/describe/list**
  - **Setup Autoscaling**: set-autoscaling/stop-autoscaling
    - gcloud compute instance-groups managed **set-autoscaling** my-mig **--max-num-replicas**=10 ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.070.png) --cool-down-period (default - 60s): How much time should Auto Scaler wait aer initiating an autoscaling action? ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.071.png) --scale-based-on-cpu --target-cpu-utilization --scale-based-on-load-balancing --target-load-balancing-utilization ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.072.png) **--min-num-replicas** --mode (off/on(default)/only-scale-out)
      - gcloud compute instance-groups managed **stop-autoscaling** my-mig
    - **Update existing MIG policies** (ex: auto healing policies):
      - gcloud compute instance-groups managed **update** my-mig ![ref25] --initial-delay: How much time should you give to the instance to start before marking it as unhealthy? ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.073.png) --health-check: How do you decide if an instance is healthy?

66![ref11]

**Managed Instance Group - Command Line - Making Updates![ref1]**

- **Resize the group**:
  - gcloud compute instance-groups managed **resize** my-mig **--size=5**
  - **Recreate one or more instances** (delete and recreate instances):
    - gcloud  compute  instance-groups  managed  **recreate-instances**  my-mig  **--instances=my- instance-1,my-instance-2**
    - **Update specific instances**:
      - gcloud compute instance-groups managed **update-instances** my-mig --instances=my-instance- 3,my-instance-4 (Update specific instances from the group)
        - **--minimal-action**=none(default)/refresh/replace/restart
          - **--most-disruptive-allowed-action**=none(default)/refresh/replace/restart
      - **Update instance template**:
        - gcloud  compute  instance-groups  managed  **set-instance-template**  my-mig  **--template=v2- template ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.074.png)** Aer updating instance template, you can trigger roll out of the new template using update-instances, recreate- instances or rolling-action start-update commands

67![ref11]

**Managed Instance Groups - Command Line - Rolling Actions![ref1]**

- **Scenario**: You want to manage your new release - v1 to v2 - without downtime
  - gcloud compute instance-groups managed **rolling-action**
    - **Restart(stop  &  start)**-  gcloud compute instance-groups **managed rolling-action  restart** my- mig
      - --max-surge=5 or 10% (Max no of instances updated at a time)
      - **Replace(delete & recreate)**- gcloud compute instance-groups **managed rolling-action replace** my-mig
        - --max-surge=5 or 10% (Max no of instances updated at a time)
          - --max-unavailable=5 or 10% (Max no of instances that can be down for the update)
            - --replacement-method=recreate/substitute  (substitute  (default)  creates  instances  with  new  names.  recreate reuses names)
        - **Updates instances** to a new template: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.075.png) **Basic  Version**  (Update  all  instances  slowly  step  by  step)  -  gcloud  compute  instance-groups  managed  **rolling- action start-update** my-mig --version=template=v1-template ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.076.png) **Canary Version** (Update a subset of instances to v2) - gcloud compute instance-groups managed **rolling-action start-update** my-mig --version=template=v1-template --canary-version=template=v2-template,target-size=10% ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.077.png) Options: --max-surge, --max-unavailable, --replacement-method

68![ref11]

**Playing with Managed Instance Groups - Scenarios ![ref1]**

- I want to ensure that I have one healthy instance running all the time: ![ref24]
  - gcloud  compute  instance-groups  managed  **set-autoscaling**  my-group  --max-num- replicas=1 --min-num-replicas=1 
  - I want to make a new release with no reduction in available number of instances. I want to update one instance at a time:
    - gcloud compute instance-groups managed **rolling-action start-update** my-group -- version=template=my-v1-template --max-surge 1 --max-unavailable 0

69![ref11]

**Instance Group Scenarios ![ref1]**

**Scenario Solution![ref28]**

**You want MIG managed application** Create multiple zone MIG (or regional MIG) **to survive Zonal Failures![ref29]**

**You want to create VMs of different** Create Un-managed Instance Group **configurations in the same group![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.080.png)**

70![ref11]

**You want to preserve VM state in an MIG![ref29]**

**Stateful MIG** - Preserve VM state (Instance name, attached Persistent disks and Metadata). Recommended for stateful workloads (database, data processing apps)

**You want high availability in an MIG even when there are hardware/soware updates**

Use an instance template with availability policy  

automatic restart: enabled & on-host maintenance: migrate  Ensures live migration and automatic restarts

70![ref11]

**You want unhealthy instances to be** Configure health check on the MIG (self healing) ![ref28]**automatically replaced![ref29]**

**Avoid frequent scale up & downs** Cool-down period/Initial delay![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.081.png)

70![ref11]

**Cloud Load Balancing![ref1]**

71![ref11]

**Cloud Load Balancing ![ref1]**

- Distributes  user  traffic  across  instances  of  an ![ref27]application in single region or multiple regions 
  - **Fully distributed, soware defined** managed service 
    - Important Features: 
      - Health check - Route to healthy instances 
        - Recover from failures 
        - Auto Scaling 
          - Global load balancing with single anycast IP 
            - Also supports internal load balancing 
  - Enables:
    - High Availability
    - Auto Scaling
      - Resiliency

72![ref11]

**HTTP vs HTTPS vs TCP vs TLS vs UDP ![ref1]**

- Computers use protocols to communicate ![ref30]
  - Multiple layers and multiple protocols 
    - **Network Layer** - Transfer bits and bytes 
      - **Transport  Layer**  -  Are  the  bits  and  bytes transferred properly? 
        - **Application Layer** - Make REST API calls and Send Emails 
          - (Remember)  Each  layer  makes  use  of  the layers beneath it 
            - (Remember)  Most  applications  talk  at application layer. BUT some applications talk at transport layer directly(high performance).

73![ref11]
**HTTP vs HTTPS vs TCP vs TLS vs UDP![ref1]**

- Network Layer: ![ref30]
  - IP (Internet Protocol): Transfer bytes. Unreliable. 
  - Transport Layer: 
    - TCP (Transmission Control): Reliability > Performance 
    - TLS (Transport Layer Security): Secure TCP 
      - UDP (User Datagram Protocol): Performance > Reliability 
    - Application Layer: 
      - HTTP(Hypertext  Transfer  Protocol):  Stateless  Request Response Cycle 
      - HTTPS: Secure HTTP 
        - SMTP: Email Transfer Protocol 
      - and a lot of others... 

74![ref11]
**HTTP vs HTTPS vs TCP vs TLS vs UDP![ref1]**

- **Most  applications**  typically  communicate  at ![ref30]application layer 
  - Web apps/REST API(HTTP/HTTPS), Email Servers(SMTP), File Transfers(FTP) 
  - All  these  applications  use  TCP/TLS  at  network  layer(for reliability) 
  - **HOWEVER** applications needing high performance **directly** communicate at transport layer: 
    - Gaming  applications  and  live  video  streaming  use  UDP (sacrifice reliability for performance) 
    - **Objective**: Understand Big Picture. Its OK if you do not understand all details. 

75![ref11]

**Cloud Load Balancing - Terminology ![ref1]**

![ref31] ![ref15] ![ref32] ![ref15] ![ref16]

- **Backend** - Group of endpoints that receive traffic from a Google Cloud load balancer (example: instance groups)
  - **Frontend** - Specify an IP address, port and protocol. This IP address is the frontend IP for your clients requests.
    - For SSL, a certificate must also be assigned.
    - **Host and path rules** (For HTTP(S) Load Balancing) - Define rules redirecting the traffic to different backends:
      - Based on **path** - in28minutes.com/a vs in28minutes.com/b
        - Based on **Host** - a.in28minutes.com vs b.in28minutes.com
        - Based on **HTTP headers** (Authorization header) and methods (POST, GET, etc)
          - etc..

76![ref11]

**Load Balancing - SSL/TLS Termination/Offloading ![ref1]**

![ref31] ![ref15] ![ref32] ![ref15] ![ref16]

- Client to Load Balancer: Over internet
  - HTTPS recommended
  - Load Balancer to VM instance: Through Google internal network
    - HTTP is ok. HTTPS is preferred.
    - SSL/TLS Termination/Offloading
      - Client to Load Balancer: HTTPS/TLS
      - Load Balancer to VM instance: HTTP/TCP

77![ref11]

**Cloud Load Balancing - Choosing Load Balancer ![ref1]**

[**https://cloud.google.com/load-balancing/images/choose-lb.svg**](https://cloud.google.com/load-balancing/images/choose-lb.svg)

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.085.jpeg)

78![ref11]

**Cloud Load Balancing - Features ![ref1]**

**Load Balancer Type of Traffic Proxy or pass- Destination Ports**

**through![ref33]**

**External HTTP(S)** Global, External, HTTP or HTTPS Proxy HTTP on 80 or 8080 

HTTPS on 443 ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.087.png)**Internal HTTP(S)** Regional, Internal, HTTP or HTTPS Proxy HTTP on 80 or

8080 

HTTPS on 443 ![ref34]**SSL Proxy** Global, External, TCP with SSL offload Proxy A big list ![ref33]**TCP Proxy** Global, External, TCP without SSL Proxy A big list

offload![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.089.png)

**External Network** Regional, External, TCP or UDP Pass-through any **TCP/UDP![ref34]**

**Internal TCP/UDP** Regional, Internal, TCP or UDP Pass-through any![ref33]

79![ref11]

**Load Balancer Scenarios ![ref1]**

**Scenario Solution![ref35]**

**You want only healthy instances to** Configure health check **receive traffic![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.091.png)**

**You want high availability for your VM** Create Multiple MIGs for your VM instances in multiple regions. Load **instances** balance using a Load Balancer.![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.092.png)

**You want to route requests to** Create individual MIGs and backends for each microservice.  **multiple microservices using the** Create Host and path rules to redirect to specific microservice **same load balancer** backend based on the path (/microservice-a, /microservice-b etc).

You can route to a backend Cloud Storage bucket as well.![ref35]

**You want to load balance Global** Choose External HTTP(S) Load Balancer **external HTTPS traffic across backend**

**instances, across multiple regions![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.093.png)**

**You want SSL termination for Global** Choose SSL Proxy Load Balancer **non-HTTPS traffic with load balancing![ref35]**

80![ref11]

**Managed Services![ref1]**

81![ref11]

**Managed Services ![ref1]**

- Do you want to continue **running applications in the cloud**, ![ref10]the **same way you run them** in your **data center**? 
  - OR **are there OTHER approaches**? 
    - You  should  **understand  some terminology**  used  with  cloud services:
      - **IaaS** (Infrastructure as a Service)
        - **PaaS** (Platform as a Service)
          - **FaaS** (Function as a Service)
            - **CaaS** (Container as a Service)
            - **Serverless**
      - Let's get on a quick **journey** to understand these!

82![ref11]

**IAAS (Infrastructure as a Service) ![ref1]**

- Use **only infrastructure** from cloud provider ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.094.png)
  - **Example**:  Using  VM  to  deploy  your  applications  or databases 
    - You are responsible for: 
      - Application Code and Runtime 
        - Configuring load balancing 
          - Auto scaling 
            - OS upgrades and patches 
            - Availability 
      - etc.. ( and a lot of things!) 

83![ref11]

**PAAS (Platform as a Service) ![ref1]**

- Use a platform provided by cloud ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.095.png)
  - **Cloud provider** is responsible for: 
    - OS (incl. upgrades and patches) 
      - Application Runtime 
        - Auto scaling, Availability & Load balancing etc.. 
    - **You** are responsible for: 
      - Configuration (of Application and Services) 
      - Application code (if needed) 
      - Varieties: 
        - **CAAS (Container as a Service)**: Containers instead of Apps 
          - **FAAS (Function as a Service)**: Functions instead of Apps 
            - Databases  -  Relational  &  NoSQL  (Amazon  RDS,  Google  Cloud SQL, Azure SQL Database etc), Queues, AI, ML, Operations etc!

84![ref11]

**Microservices ![ref1]**

![ref36]

- Enterprises are heading towards microservices architectures
  - Build small focused microservices
    - **Flexibility to innovate** and build applications in different programming languages (Go, Java, Python, JavaScript, etc)
  - BUT **deployments become complex**!
    - How can  we have **one way of deploying**  Go, Java,  Python  or JavaScript  .. microservices?
      - Enter **containers**!

85![ref11]

**Containers - Docker ![ref1]**

- Create **Docker images** for each microservice ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.097.jpeg)
  - Docker image **has all needs of a microservice**: 
    - Application Runtime (JDK or Python or NodeJS) 
      - Application code and Dependencies 
    - Runs **the same way** on any infrastructure: 
      - Your local machine 
        - Corporate data center 
        - Cloud 
      - Advantages
        - Docker containers are **light weight**
          - Compared to Virtual Machines as they do not have a Guest OS
        - Docker provides **isolation** for containers
          - Docker is **cloud neutral**

86![ref11]

**Container Orchestration ![ref1]**

- **Requirement** : I want 10 instances of ![ref37]Microservice A container, 15 instances of Microservice B container and .... 
  - Typical Features: 
    - **Auto  Scaling**  -  Scale  containers  based  on demand 
      - **Service Discovery** - Help microservices find one another 
        - **Load  Balancer**  -  Distribute  load  among multiple instances of a microservice 
          - **Self Healing** - Do health checks and replace failing instances
        - **Zero Downtime Deployments** - Release new versions without downtime

87![ref11]

**Serverless ![ref1]**

- What do we think about when we develop an application?
  - Where to deploy? What kind of server? What OS?
    - How do we take care of scaling and availability of the application?
  - **What if you don't need to worry about servers and focus on your code?**
    - Enter **Serverless**
      - Remember: **Serverless does NOT mean "No Servers"**
    - **Serverless for me**:
      - You **don't worry** about infrastructure (ZERO visibility into infrastructure)
        - Flexible scaling and automated high availability
      - Most Important: **Pay for use ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.099.png)** Ideally ZERO REQUESTS => ZERO COST
      - **You focus on code** and the cloud managed service takes care of all that is needed to scale your code to serve millions of requests!
        - And you pay for requests and NOT servers!

88![ref11]

**Serverless - My Perspective! ![ref1]**

- Serverless - Important Features:
  - 1: Zero worry about infrastructure, scaling and availability
    - 2: Zero invocations => Zero Cost (Can you scale down to ZERO instances?)
      - 3: Pay for invocations and NOT for instances (or nodes or servers)
        - Serverless **Level 1**: Features (1 + 2)
        - Serverless **Level 2**: Features (1 + 2 + 3)
  - When I refer to Serverless, I'm referring to Level 2
    - HOWEVER cloud providers include managed services at Level 1 and Level 2:
      - **Level  1**:  **Google  App  Engine**  (Google  Calls  it  "App  Engine  is  a  fully  managed,  serverless platform"), **AWS Fargate** (AWS calls it "serverless compute engine for containers")
        - Scale down to ZERO instances when there is no load, **BUT** you pay for number (and type) of instances running!
        - **Level 2**: **Google Functions, AWS Lambda, Azure Functions** etc
          - You pay for invocations

89![ref11]

**GCP Managed Services for Compute ![ref1]**

**Service Details Category ![ref14]![ref38]Compute** High-performance and general purpose VMs that scale globally IaaS 

**Engine ![ref39]**

**Google** Orchestrate containerized microservices on Kubernetes   CaaS ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.102.png)**Kubernetes** Needs advanced cluster configuration and monitoring 

**Engine ![ref38]**

**App Engine** Build highly scalable applications on a fully managed platform PaaS (CaaS, 

using open and familiar languages and tools Serverless) ![ref40]![ref39]

**Cloud** Build event driven applications using simple, single-purpose FaaS, **Functions** functions Serverless ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.104.png)

**Cloud Run** Develop and deploy highly scalable containerized applications.   CaaS ![ref41]

Does NOT need a cluster! (Serverless) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.106.png)

90![ref11]

**App Engine![ref1]**

91![ref11]

**App Engine ![ref1]**

- **Simplest way** to deploy and scale your applications in GCP ![ref6]
  - Provides end-to-end application management 
  - Supports: 
    - Go, Java, .NET, Node.js, PHP, Python, Ruby using pre-configured runtimes 
      - Use custom run-time and write code in any language 
        - Connect to variety of Google Cloud storage products (Cloud SQL etc)
    - **No usage charges** - Pay for resources provisioned
      - **Features**:
        - Automatic load balancing & Auto scaling
        - Managed platform updates & Application health monitoring
          - Application versioning
            - Traffic splitting

92![ref11]

**Compute Engine vs App Engine ![ref1]**

- **Compute Engine ![ref6]**
  - IAAS 
    - MORE Flexibility 
      - MORE Responsibility 
        - Choosing Image ![ref2]
          - Installing Soware 
            - Choosing Hardware ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.107.png) Fine grained Access/Permissions (Certificates/Firewalls) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.108.png) Availability etc 
  - **App Engine**
    - PaaS
      - Serverless
      - LESSER Responsibility
    - LOWER Flexibility

93![ref11]

**App Engine environments ![ref1]**

- **Standard**: Applications run in language specific sandboxes ![ref6]
  - Complete isolation from OS/Disk/Other Apps 
    - **V1**: Java, Python, PHP, Go (OLD Versions) 
      - ONLY for Python and PHP runtimes: 
        - Restricted network Access ![ref42] Only white-listed extensions and libraries are allowed
        - No Restrictions for Java and Go runtimes
    - **V2**: Java, Python, PHP, Node.js, Ruby, Go (NEWER Versions)
      - Full Network Access and No restrictions on Language Extensions
  - **Flexible** - Application instances run within Docker containers
    - Makes use of Compute Engine virtual machines
      - Support ANY runtime (with built-in support for Python, Java, Node.js, Go, Ruby, PHP, or .NET)
        - Provides access to background processes and local disks

94![ref11]

**App Engine - Application Component Hierarchy ![ref1]**

- **Application**: One App per Project ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.110.jpeg)
  - **Service(s)**:  Multiple  Microservices  or App components 
    - You  can  have  multiple  services  in  a  single application 
      - Each **Service** can have different settings 
        - Earlier called Modules 
    - **Version(s)**:  Each  version  associated with code and configuration 
      - Each  **Version**  can  run  in  one  or  more instances
        - Multiple versions can co-exist
      - Options to rollback and split traffic

95![ref11]

**App Engine - Comparison ![ref1]**

**Feature Standard Flexible![ref43]**

**Pricing Factors** Instance hours vCPU, Memory & Persistent Disks ![ref44]**Scaling** Manual, Basic, Automatic Manual, Automatic![ref43]

**Scaling to zero** Yes No. Minimum one instance ![ref44]**Instance startup** Seconds Minutes

**time![ref45]**

**Rapid Scaling** Yes No![ref46]

**Max. request** 1 to 10 minutes 60 minutes **timeout![ref44]**

**Local disk** Mostly(except for Python, PHP). Can write to Yes. Ephemeral. New Disk on

/tmp. startup.![ref45]

**SSH for debugging** No Yes![ref46]

96![ref11]

**App Engine - Scaling Instances ![ref1]**

- **Automatic** - Automatically scale instances based on the load: ![ref40]
  - Recommended for Continuously Running Workloads 
    - Auto scale based on: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.115.png) **Target CPU Utilization** - Configure a CPU usage threshold. ![ref42] **Target Throughput Utilization** - Configure a throughput threshold ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.116.png) **Max Concurrent Requests** - Configure max concurrent requests an instance can receive
      - Configure **Max Instances** and **Min Instances**
  - **Basic** - Instances are created as and when requests are received:
    - Recommended for Adhoc Workloads
      - Instances are shutdown if ZERO requests ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.117.png) Tries to keep costs low ![ref47] High latency is possible
        - NOT supported by App Engine Flexible Environment ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.119.png) Configure **Max Instances** and **Idle Timeout**
    - **Manual** - Configure specific number of instances to run:
      - Adjust number of instances manually over time

97![ref11]

**AppEngine Demo ![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.120.png) Deploy an application to cloud using App Engine

98![ref11]

**app.yaml Reference![ref1]**

runtime: python28 #The name of the runtime environment that is used by your app api\_version: 1  #RECOMMENDED - Specify here - gcloud app deploy -v [YOUR\_VERSION\_ID] instance\_class: F1 

service: service-name  

#env: flex 

inbound\_services: 

- warmup 

env\_variables: 

`  `ENV\_VARIABLE: "value" 

handlers: 

- url: / 

`  `script: home.app 

automatic\_scaling: 

`  `target\_cpu\_utilization: 0.65   min\_instances: 5 

`  `max\_instances: 100 

`  `max\_concurrent\_requests: 50 #basic\_scaling: 

`  `#max\_instances: 11 

`  `#idle\_timeout: 10m #manual\_scaling: 

`  `#instances: 5 

99![ref11]

**AppEngine - Request Routing ![ref1]**

- You can use a **combination** of three approaches: ![ref40]
  - Routing with **URLs**: 
    - [**https://PROJECT_ID.REGION_ID.r.appspot.com**](https://project_id.region_id.r.appspot.com/) (default service called) 
      - [**https://SERVICE-dot-PROJECT_ID.REGION_ID.r.appspot.com**](https://service-dot-project_id.region_id.r.appspot.com/) (specific service) 
        - [**https://VERSION-dot-SERVICE-dot-PROJECT_ID.REGION_ID.r.appspot.com**](https://version-dot-service-dot-project_id.region_id.r.appspot.com/) (specific version of service) 
          - Replace -dot- with . if using custom domain
    - Routing with a **dispatch file**:
      - Configure dispatch.yaml with routes
        - gcloud app deploy dispatch.yaml
  - Routing with **Cloud Load Balancing**: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.121.png) Configure routes on Load Balancing instance

100![ref48]

**AppEngine - Deploying new versions without downtime ![ref1]**

- How do I go from V1 to V2 without downtime? ![ref40]
  - **Option 1**: I'm very confident - Deploy & shi all traffic at once: 
    - Deploy and shi all traffic at once from v1 to v2: **gcloud app deploy** 
    - **Option 2**: I want to manage the migration from v1 to v2 
      - **STEP 1**: Deploy v2 without shiing traffic (--no-promote)
        - **gcloud app deploy --no-promote**
        - **STEP 2**: Shi traffic to V2:
          - **Option 1** (All at once Migration): Migrate all at once to v2 ![ref47] **gcloud app services set-traffic s1 --splits V2=1**
            - **Option 2 (Gradual Migration)**: Gradually shi traffic to v2. Add --migrate option. ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.123.png) Gradual migration is not supported by App Engine Flexible Environment ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.124.png) **Option 3 (Splitting)**: Control the pace of migration ![ref47] **gcloud app services set-traffic s1 --splits=v2=.5,v1=.5 ![ref49]** Useful to perform A/B testing ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.126.png) Ensure  that  new  instances  are  warmed  up  before  they  receive  traffic  (app.yaml  - inbound\_services > warmup)

101![ref48]

**How do you split traffic between multiple versions? ![ref1]**

- How do you decide which version receives which traffic? ![ref40]
  - **IP Splitting** - Based on request IP address 
    - IP addresses can change causing accuracy issues! (I go from my house to a coffee shop) 
      - If all requests originate from a corporate vpn with single IP, this can cause all requests to go to the same version 
    - **Cookie Splitting** - Based on a cookie (**GOOGAPPUID**)
      - Cookies can be controlled from your application ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.127.png) Cookie splitting accurately assign users to versions
      - **Random** - Do it randomly
  - How to do it?
    - Include  --split-by  option  in  gcloud  app  services  set-traffic command ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.128.png) Value must be one of: cookie, ip, random ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.129.png) gcloud  app  services  set-traffic  s1  --splits=v2=.5,v1=.5  --split - by=cookie

102![ref48]

**Playing with App Engine ![ref1]**

- **gcloud app browse/create/deploy/describe/open-console ![ref40]**
  - gcloud app **create** --region=us-central 
    - gcloud app **deploy** app.yaml 
      - --image-url: Only for flexible environments. Deploy docker image. 
        - gcloud app deploy --image-url gcr.io/PROJECT-ID/hello-world-rest-api:0.0.1.RELEASE 
        - --promote --no-promote (Should new version receive traffic?)
          - --stop-previous-version --no-stop-previous-version (Should old version be stopped aer new version receives all traffic?)
            - --version (Assign a version. Otherwise, a version number is generated.)
    - gcloud app **browse** --service="myService" --version="v1" (open in a web browser)
  - gcloud app **open-console** --service="myService" --version="v1"
    - gcloud app **open-console --logs**
  - Other Commands
    - gcloud app **logs tail**
      - gcloud app **regions list**

103![ref48]
**Playing with App Engine Instances ![ref40]![ref1]**

- **gcloud app instances delete/describe/list/scp/ssh** 
  - gcloud app instances **delete** i1 --service=s1 --version=v1 
    - gcloud app instances **describe** --service=s1 --version=v1 i1
  - gcloud app instances **list**
    - gcloud app instances **scp** --service=s1 --version=v1 --recurse local\_dir i1:remote\_dir (Copy files to/from App Engine Flexible instances)
  - gcloud app  instances  **ssh**  --service=s1  --version=v1  i1  (SSH  into  the  VM  of  an  App Engine Flexible instance)

104![ref48]

**Playing with App Engine Services and Versions ![ref1]**

- **gcloud app services browse/delete/describe/list/set-traffic**
  - gcloud app services **list**
    - gcloud app services **browse** myService --version="v1"
  - gcloud app services **delete** service1 service2
    - gcloud app services **describe** service1
      - gcloud app services **set-traffic** APP1 --splits v1=0.9,v2=0.1
        - --split\_by (ip, cookie, random)
  - **gcloud app versions browse/delete/describe/list/migrate/start/stop**
    - gcloud app versions **list**
      - --hide-no-traffic (Only show versions that are receiving traffic)
      - gcloud app versions **browse**/**delete**/**describe** v1 --service="myService"
      - gcloud app versions **migrate** v2 --service="myService" (migrate all traffic to new version)
        - gcloud app versions **start/stop** v1
          - --service=my-service Only start v1 of service my-service

105![ref48]

**App Engine - Cron Job ![ref1]**

cron: 

- description: "daily summary job"   url: /tasks/summary 

  `  `schedule: every 24 hours 

- Allows to run **scheduled jobs** at pre-defined intervals
  - **Use cases**:
    - Send a report by email every day
      - Refresh cache data every 30 minutes
    - Configured using **cron.yaml**
      - Run this command - **gcloud app deploy cron.yaml**
        - Performs a **HTTP GET** request to the configured URL on schedule

106![ref48]

**Others Important App Engine yaml files ![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.130.png) **dispatch.yaml** - override routing rules

dispatch: 

- url: "\*/mobile/\*" 

`    `service: mobile-frontend 

- url: "\*/work/\*" 

`    `service: static-backend 

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.131.png) **queue.yaml** - manage task queues

queue: 

- name: fooqueue

`  `rate: 1/s 

`  `retry\_parameters: 

`    `task\_retry\_limit: 7     task\_age\_limit: 2d 

107![ref48]

**App Engine - Remember ![ref1]**

- AppEngine is **Regional** (services deployed across zones) ![ref40]
  - You **CANNOT** change an Application's region 
  - Good option for simple **microservices** (multiple services) 
    - Use **Standard v2** when you are using supported languages 
      - Use **Flexible** if you are building containerized apps
    - Be  aware  -  **ATLEAST  one  container**  is  always  running  when  using **Flexible**:
      - **Go for Standard** if you want to be able to scale down the number of instances to **zero** when there is NO load
      - Use a **combination of resident and dynamic** instances
        - Resident Instances: Run continuously
          - Dynamic Instances: Added based on load
            - Use all dynamic instances if you are cost sensitive ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.132.png) If you are not very cost sensitive, keep a set of resident instances running always

108![ref48]

**App Engine - Scenarios ![ref1]**

**Scenario Solution![ref50]**

**I want to create two Google App** Not possible. You can only have one App Engine App per project. However **Engine Apps in the same project** you can have multiple services and multiple version for each service.![ref51]

**I want to create two Google App** Yup. You can create multiple services under the same app. Each service **Engine Services inside the same** can have multiple versions as well.

**App![ref50]**

**I want to move my Google App** App Engine App is region specific. You CANNOT move it to different **Engine App to a different region** region. Create a new project and create new app engine app in the new

region.![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.135.png)

**Perform Canary deployments** Deploy v2 without shiing traffic (gcloud app deploy --no-

promote) 

Shi some traffic to V2 (gcloud app services set-traffic s1 --splits v1=0.9,v2=0.1)![ref51]

109![ref48]

**Google Kubernetes Engine (GKE)![ref1]**

110![ref52]

**Kubernetes ![ref1]**

- Most  popular  open  source  container ![ref37]orchestration solution 
  - Provides  Cluster  Management (including upgrades) 
    - Each  cluster  can  have  different  types  of virtual machines 
    - Provides  all  important  container orchestration features: 
      - **Auto Scaling** 
        - **Service Discovery** 
        - **Load Balancer**
      - **Self Healing**
        - **Zero Downtime Deployments**

111![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.137.png)

**Google Kubernetes Engine (GKE) ![ref1]**

- **Managed** Kubernetes service ![ref53]
  - Minimize operations with **auto-repair** (repair failed nodes) and **auto-upgrade** (use latest version of K8S always) features 
    - Provides **Pod and Cluster Autoscaling** 
      - Enable  **Cloud  Logging**  and  **Cloud  Monitoring**  with  simple configuration
        - Uses **Container-Optimized OS**, a hardened OS built by Google
          - Provides support for **Persistent disks** and **Local SSD**

112![ref52]

**Kubernetes - A Microservice Journey - Getting Started ![ref1]**

- **Let's Have Some Fun**: Let's get on a journey with Kubernetes: ![ref54]
  - Let's create a cluster, deploy a microservice and play with it in **13 steps**! 
  - **1:** Create a Kubernetes cluster with the default node pool 
    - gcloud container **clusters create** or use cloud console 
    - **2:** Login to Cloud Shell
      - **3:** Connect to the Kubernetes Cluster
        - gcloud  container **clusters  get-credentials**  my-cluster  --zone  us-central1-a  --project solid-course-258105

113![ref52]

**Kubernetes - A Microservice Journey - Deploy Microservice![ref1]**

- **4:** Deploy Microservice to Kubernetes: ![ref54]
  - Create deployment & service using kubectl commands 
    - kubectl **create deployment** hello-world-rest-api --image=in28min/hello-world-rest-api:0.0.1.RELEASE 
      - kubectl **expose deployment** hello-world-rest-api --type=LoadBalancer --port=8080 
  - **5:** Increase number of instances of your microservice:
    - kubectl **scale deployment** hello-world-rest-api --replicas=2
    - **6:** Increase number of nodes in your Kubernetes cluster:
      - gcloud container clusters resize **my-cluster --node-pool my-node-pool --num-nodes 5**
        - You are NOT happy about manually increasing number of instances and nodes!

114![ref52]

**Kubernetes - A Microservice Journey - Auto Scaling and ..![ref1]**

- **7:** Setup auto scaling for your microservice: ![ref54]
  - kubectl **autoscale deployment** hello-world-rest-api --max=10 --cpu-percent=70 
    - Also called horizontal pod autoscaling - HPA - kubectl get hpa 
  - **8:** Setup auto scaling for your Kubernetes Cluster 
    - gcloud **container clusters update** cluster-name --enable-autoscaling --min-nodes=1 -- max-nodes=10
    - **9:** Add some application configuration for your microservice
      - Config  Map  -  kubectl  **create  configmap**  todo-web-application-config  --from- literal=RDS\_DB\_NAME=todos
      - **10:** Add password configuration for your microservice
        - Kubernetes Secrets - kubectl **create secret** generic todo-web-application-secrets-1 -- from-literal=RDS\_PASSWORD=dummytodos

115![ref52]

**Kubernetes Deployment YAML - Deployment ![ref1]**

apiVersion: apps/v1 

kind: Deployment

metadata: 

`  `labels: 

`    `app: hello-world-rest-api 

`  `name: hello-world-rest-api 

`  `namespace: default 

spec: 

`  `replicas: 3 

`  `selector: 

`    `matchLabels:

`      `app: hello-world-rest-api 

`  `template: 

`    `metadata: 

`      `labels: 

`        `app: hello-world-rest-api     spec: 

`      `containers: 

- image: in28min/hello-world-rest-api:0.0.3.RELEASE 

`        `name: hello-world-rest-api 

116![ref52]

**Kubernetes Deployment YAML - Service ![ref1]**

apiVersion: v1 

kind: Service 

metadata: 

`  `labels: 

`    `app: hello-world-rest-api   name: hello-world-rest-api   namespace: default 

spec: 

`  `ports:

- port: 8080 

`    `protocol: TCP 

`    `targetPort: 8080 

`  `selector: 

`    `app: hello-world-rest-api   sessionAffinity: None 

`  `type: LoadBalancer 

117![ref52]

**Kubernetes - A Microservice Journey - The End! ![ref1]**

- **11:**  Deploy  a  new  microservice  which  needs  nodes  with  a  GPU ![ref54]attached 
  - Attach a new node pool with GPU instances to your cluster 
    - gcloud **container node-pools create** POOL\_NAME --cluster CLUSTER\_NAME 
      - gcloud container node-pools list --cluster CLUSTER\_NAME
  - Deploy the new microservice to the new pool by setting up nodeSelector in the deployment.yaml
    - nodeSelector: cloud.google.com/gke-nodepool: POOL\_NAME
  - **12:** Delete the Microservices
    - Delete service - kubectl **delete service**
    - Delete deployment - kubectl **delete deployment**
    - **13:** Delete the Cluster
      - gcloud container **clusters delete**

118![ref52]

**Google Kubernetes Engine (GKE) Cluster ![ref1]**

- **Cluster** : Group of Compute Engine instances: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.140.jpeg)
  - **Master Node(s)** - Manages the cluster 
    - **Worker Node(s)** - Run your workloads (pods) 
  - **Master Node** (Control plane) components: 
    - **API  Server**  -  Handles  all  communication  for  a  K8S cluster (from nodes and outside) 
      - **Scheduler** - Decides placement of pods 
    - **Control  Manager**  -  Manages  deployments  & replicasets
      - **etcd** - Distributed database storing the cluster state
    - **Worker Node** components:
      - Runs your pods
      - **Kubelet**  -  Manages  communication  with  master node(s)

119![ref52]

**GKE Cluster Types ![ref1]**

**Type Description ![ref53]![ref55]**

**Zonal Single Zone** - Single Control plane. Nodes running in the same zone. **Cluster ![ref56]**

**Multi-zonal** - Single Control plane but nodes running in multiple zones ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.143.png)

**Regional** Replicas of the control plane runs in multiple zones of a given region. Nodes also run **cluster** in same zones where control plane runs.![ref55]

**Private** VPC-native cluster. Nodes only have internal IP addresses.

**cluster![ref56]**

**Alpha** Clusters with alpha APIs - early feature API's. Used to test new K8S features. **cluster![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.144.png)**

120![ref48]

**Kubernetes - Pods ![ref1]**

- Smallest deployable unit in Kubernetes ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.145.jpeg)
  - A Pod contains **one or more containers** 
    - Each Pod is assigned an ephemeral **IP address** 
      - All containers in a pod share: 
        - Network 
          - Storage 
            - IP Address 
              - Ports and
              - Volumes (Shared persistent disks)
        - POD statuses : Running /Pending /Succeeded /Failed /Unknown

121![ref48]

**Kubernetes - Deployment vs Replica Set ![ref1]**

- A **deployment** is created for each microservice: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.146.jpeg)
  - kubectl create deployment m1 --image=m1:v1 
    - Deployment represents a microservice (with all its releases) 
      - Deployment manages new releases ensuring zero downtime 
  - **Replica set** ensures that a specific number of pods are running for a specific microservice version 
    - kubectl scale deployment m2 --replicas=2
    - Even if one of the pods is killed, replica set will launch a new one
    - Deploy V2 of microservice - Creates a new replica set
      - kubectl set image deployment m1 m1=m1:v2
        - V2 Replica Set is created
      - Deployment updates V1 Replica Set and V2 Replica Set based on the release strategies

122![ref48]

**Kubernetes - Service ![ref1]**

- Each Pod has its **own IP address**:
  - How do you ensure that external users are not impacted when:
    - A pod fails and is replaced by replica set
      - A new release happens and all existing pods of old release are replaced by ones of new release
  - Create **Service**
    - kubectl expose deployment name --type=LoadBalancer --port=80
      - Expose PODs to outside world using a stable IP Address
        - Ensures that the external world does not get impacted as pods go down and come up
    - Three Types:
      - **ClusterIP**: Exposes Service on a cluster-internal IP ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.147.png) Use case: You want your microservice only to be available inside the cluster (Intra cluster communication)
      - **LoadBalancer**: Exposes Service externally using a cloud provider's load balancer ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.148.png) Use case: You want to create individual Load Balancer's for each microservice
      - **NodePort**: Exposes Service on each Node's IP at a static port (the NodePort) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.149.png) Use case: You DO not want to create an external Load Balancer for each microservice (You can create one Ingress component to load balance multiple microservices)

123![ref48]

**Container Registry - Image Repository ![ref1]**

![ref36]

- You've created docker images for your microservices:
  - **Where do you store them?**
  - **Container Registry** - fully-managed container registry provided by GCP
    - (Alternative) Docker Hub
      - Can be integrated to CI/CD tools to publish images to registry
        - You can secure your container images. Analyze for vulnerabilities and enforce deployment policies.
          - Naming: **HostName/ProjectID/Image:Tag** - **gcr.io/projectname/helloworld:1**

124![ref48]

**GKE - Remember ![ref1]**

- **Replicate master nodes** across multiple zones for high availability
  - (REMEMBER) Some **CPU** on the nodes is **reserved by Control Plane**:
    - 1st core - 6%, 2nd core - 1%, 3rd/4th - 0.5, Rest - 0.25
    - Creating Docker Image for your microservices(Dockerfile):
      - Build Image: docker build -t in28min/hello-world-rest-api:0.0.1.RELEASE .
      - Test it Locally: docker run -d -p 8080:8080 in28min/hello-world-rest-api:0.0.1.RELEASE
        - Push it to Container Repository: docker push in28min/hello-world-rest-api:0.0.1.RELEASE
      - Kubernetes supports **Stateful** deployments like Kafka, Redis, ZooKeeper:
        - **StatefulSet** - Set of Pods with unique, persistent identities and stable hostnames
        - How do we run services on nodes for **log collection or monitoring**?
          - **DaemonSet** - One pod on every node! (for background services)
          - (Enabled by default) Integrates with Cloud Monitoring and Cloud Logging
            - Cloud Logging **System** and **Application Logs** can be exported to **Big Query** or **Pub/Sub**

125![ref48]

**GKE - Cluster Management - Command Line ![ref1]**

**Description Command![ref57]**

**Create Cluster** gcloud container clusters **create** my-cluster --zone us-central1-a --node-locations us-

central1-c,us-central1-b![ref58]

**Resize Cluster** gcloud container clusters **resize** my-cluster --node-pool my-node-pool --num-nodes 10![ref59]

**Autoscale** gcloud **container clusters update** cluster-name --enable-autoscaling --min-nodes=1 --max- **Cluster** nodes=10![ref57]

**Delete Cluster** gcloud container clusters **delete** my-cluster![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.153.png)

**Adding Node** gcloud container **node-pools create** new-node-pool-name --cluster my-cluster **Pool![ref59]**

**List Images** gcloud container images list![ref58]

126![ref48]

**GKE - Workload Management - Command Line ![ref1]**

**Description Command![ref60]**

**List Pods/Service/Replica** kubectl **get pods/services/replicasets Sets![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.155.png)**

**Create Deployment** kubectl **apply -f** deployment.yaml or kubectl **create deployment![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.156.png)**

**Create Service** kubectl **expose deployment** hello-world-rest-api --type=LoadBalancer --

port=8080![ref60]

**Scale Deployment** kubectl **scale deployment** hello-world --replicas 5![ref61]

**Autoscale Deployment** kubectl **autoscale deployment** --max --min --cpu-percent ![ref60]**Delete Deployment** kubectl **delete deployment** hello-world![ref61]

**Update Deployment** kubectl **apply -f** deployment.yaml![ref60]

**Rollback Deployment** kubectl **rollout undo deployment** hello-world --to-revision=1![ref61]

127![ref48]

**Google Kubernetes Engine - Scenarios - 1 ![ref1]**

**Scenario Solution![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.158.png)**

128![ref48]

**You want to keep your costs low and optimize your GKE implementation**

Consider Preemptible VMs, Appropriate region, Committed- use discounts.  

E2 machine types are cheaper than N1.  

Choose right environment to fit your workload type (Use multiple node pools if needed).

128![ref48]

**You want an efficient, completely auto scaling** Configure Horizontal Pod Autoscaler for deployments and ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.159.png)**GKE solution** Cluster Autoscaler for node pools![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.160.png)

**You want to execute untrusted third-party** Create a new node pool with GKE Sandbox. Deploy **code in Kubernetes Cluster** untrused code to Sandbox node pool.![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.161.png)

128![ref48]

**Google Kubernetes Engine - Scenarios - 2 ![ref1]**

**Scenario Solution![ref62]**

**You want enable ONLY internal communication between your** Create Service of type ClusterIP **microservice deployments in a Kubernetes Cluster![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.163.png)**

**My pod stays pending** Most probably Pod cannot be scheduled

onto a node(insufficient resources)![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.164.png)

**My pod stays waiting** Most probably failure to pull the image![ref62]

129![ref48]

**Google Cloud Functions![ref1]**

130![ref48]

**Cloud Functions ![ref1]**

- Imagine you want to **execute some code when an event happens**? ![ref41]
  - A file is uploaded in Cloud Storage (OR) An error log is written to Cloud Logging (OR) A message arrives to Cloud Pub/Sub (OR) A http/https invocation is received 
  - Enter **Cloud Functions** 
    - **Run code in response to events**
      - Write your business logic in Node.js, Python, Go, Java, .NET, and Ruby
        - **Don't worry** about servers or scaling or availability (only worry about your code)
      - **Pay only for what you use**
        - Number of invocations ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.165.png) Compute time of the invocations ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.166.png) Memory and CPU provisioned
        - **Time Bound** - Default 1 min and MAX 60 minutes (3600 seconds)
        - **2 product versions ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.167.png)** Cloud Functions (1st gen): First version ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.168.png) Cloud Functions (2nd gen): New version built on top of Cloud Run and Eventarc

131![ref48]

**Cloud Functions - Concepts ![ref1]**

- **Event** : Upload object to cloud storage ![ref3]
  - **Trigger**: Respond to event with a Function call 
    - **Trigger** - Which function to trigger when an event happens? 
      - **Functions** - Take event data and perform action? 
    - Events are **triggered from**
      - Cloud Storage
        - Cloud Pub/Sub
        - HTTP POST/GET/DELETE/PUT/OPTIONS
      - Firebase
        - Cloud Firestore
          - Stack driver logging

132![ref48]

**Example Cloud Function - HTTP - Node.js ![ref1]**

const escapeHtml = require('escape-html'); 

/\*\* 

* HTTP Cloud Function. 

` `\* 

* @param {Object} req Cloud Function request context. 
* More info: https://expressjs.com/en/api.html#req 
* @param {Object} res Cloud Function response context. 
* More info: https://expressjs.com/en/api.html#res 

` `\*/ 

exports.helloHttp = (req, res) => { 

`  `res.send(`Hello ${escapeHtml(req.query.name || req.body.name || 'World')}!`); 

}; 

133![ref48]

**Example Cloud Function - Pub/Sub - Node.js ![ref1]**

/\*\* 

* Background Cloud Function to be triggered by Pub/Sub. 
* This function is exported by index.js, and executed when 
* the trigger topic receives a message. 

` `\* 

* @param {object} message The Pub/Sub message. 
* @param {object} context The event metadata. 

` `\*/ 

exports.helloPubSub = (message, context) => { 

`  `const name = message.data 

? Buffer.from(message.data, 'base64').toString() 

: 'World'; 

`  `console.log(`Hello, ${name}!`); }; 

134![ref48]

**Cloud Functions - Remember ![ref1]**

- No  Server  Management:  You  dont  need  to  worry  about  scaling  or ![ref41]availability of your function 
  - Cloud Functions automatically spin up and back down in response to events 
    - They scale horizontally!
    - Cloud Functions are recommended for responding to events:
      - Cloud Functions are NOT ideal for long running processes
        - **Time Bound** - Default 1 min and MAX 60 minutes(3600 seconds)

135![ref48]

**Cloud Run & Cloud Run for Anthos ![ref1]**

- **Cloud Run** - "Container to Production in Seconds" ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.169.png)
  - Built on top of an open standard - **Knative** 
    - **Fully managed** serverless platform for containerized applications 
      - ZERO infrastructure management ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.170.png) Pay-per-use (For used CPU, Memory, Requests and Networking) 
  - Fully integrated **end-to-end developer experience**:
    - **No limitations** in languages, binaries and dependencies
      - Easily portable because of **container** based architecture
      - Cloud Code, Cloud Build, Cloud Monitoring & Cloud Logging Integrations
    - **Anthos** - Run Kubernetes clusters anywhere
      - Cloud, Multi Cloud and On-Premise
      - **Cloud  Run  for  Anthos**:  Deploy  your  workloads  to  Anthos  clusters running on-premises or on Google Cloud
        - Leverage your existing Kubernetes investment to quickly run serverless workloads

136![ref48]

**Cloud Run - From the Command Line ![ref1]**

**Description Command![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.171.png)**

**Deploy a new container** gcloud **run deploy** SERVICE\_NAME --image IMAGE\_URL --revision-suffix v1 

First deployment creates a service and first revision  

Next deployments for the same service create new revisions![ref63]

**List available revisions** gcloud **run revisions** list![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.173.png)

**Adjust traffic assignments** gcloud **run services update-traffic** myservice --to-revisions=v2=10,v1=90![ref63]

137![ref48]

**Cloud Functions - Second Generation - What's New? ![ref1]**

- **2 Product Versions**: ![ref41]
  - Cloud Functions (1st gen): First version 
    - Cloud Functions (2nd gen): New version built on top of Cloud Run and Eventarc 
  - **Recommended**: Use Cloud Functions (2nd gen) 
    - **Key Enhancements in 2nd gen**:
      - **Longer Request timeout**: Up to 60 minutes for HTTP-triggered functions
        - **Larger instance sizes**: Up to 16GiB RAM with 4 vCPU (v1: Up to 8GB RAM with 2 vCPU)
      - **Concurrency**:  Upto  1000  concurrent  requests  per  function  instance  (v1:  1 concurrent request per function instance)
        - **Multiple Function Revisions** and **Traffic splitting** supported (v1: NOT supported)
          - Support for **90+ event types** - enabled by Eventarc (v1: Only 7)
      - DEMO!

138![ref48]

**Cloud Functions - Scaling and Concurrency ![ref1]**

- **Typical serverless functions architecture**: ![ref41]
  - **Autoscaling** - As new invocations come in, new function instances are created 
    - One function instance handles ONLY ONE request AT A TIME 
      - 3 concurrent function invocations => 3 function instances 
        - If a 4th function invocation occurs while existing invocations are in progress, a new function instance will be created
          - HOWEVER, a function instance that completed execution may be reused for future requests
  - (Typical Problem) **Cold Start**: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.174.png) New function instance initialization from scratch can take time ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.175.png) (Solution) Configure Min number of instances (increases cost)
  - **1st Gen** uses the typical serverless functions architecture
    - **2nd Gen** adds a very important new feature:
      - One function instance can handle multiple requests AT THE SAME TIME ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.176.png) **Concurrency**: How many concurrent invocations can one function instance handle? (Max 1000) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.177.png) (IMPORTANT) Your function code should be safe to execute concurrently

139![ref48]

**Cloud Functions - Deployment using gcloud ![ref1]**

- **gcloud functions deploy [NAME]**
  - **--docker-registry** (registry to store the function's Docker images)
    - Default -container-registry
      - Alternative - artifact-registry
    - **--docker-repository** (repository to store the function's Docker images)
      - Example: (projects/${PROJECT}/locations/${LOCATION}/repositories/${REPOSITORY})
    - **--gen2** (Use 2nd gen. If this option is not present, 1st gen will be used)
  - **--runtime** (nodejs, python, java,...)
    - Reference - [**https://cloud.google.com/functions/docs/runtime-support**](https://cloud.google.com/functions/docs/runtime-support)
    - **--service-account** (Service account to use)
      - 1 GEN - default - App Engine default service account - PROJECT\_ID@appspot.gserviceaccount.com ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.178.png) 2 GEN - Default compute service account - PROJECT\_NO-compute@developer.gserviceaccount.com
      - **--timeout** (function execution timeout)
    - **--max-instances** (function execution exceeding max-instances times out)
  - **--min-instances** (avoid cold starts at higher cost)

140![ref48]

**Cloud Functions - Deployment using gcloud - 2 ![ref1]**

//Deploy Pubsub Triggered gen2 function from Cloud Storage Bucket gcloud functions deploy my-pubsub-function \ 

`  `--gen2 \ 

`  `--region=europe-west1 \ 

`  `--runtime=nodejs16 \ 

`  `--source=gs://my-source-bucket/source.zip \ 

`  `--trigger-topic=my-pubsub-topic 

- **gcloud functions deploy [NAME]**
  - **--source**
    - Zip file from Google Cloud Storage (gs://my-source-bucket/my\_function\_source.zip) (OR)
      - Source Repo (https://URL/projects/${PROJECT}/repos/${REPO}) (OR)
        - Local file system
    - **--trigger-bucket** (OR) **--trigger-http** (OR) **--trigger-topic** (OR) **--trigger-event-filters** (ONLY in gen2 - Eventarc matching criteria for the trigger)
  - **--serve-all-traffic-latest-revision** (ONLY in gen2)

141![ref48]

**Encryption![ref1]**

142![ref48]

**Data States ![ref1]**

![ref64] ![ref15] ![ref65]

- **Data at rest**: Stored on a device or a backup
  - Examples : data on a hard disk, in a database, backups and archives
  - **Data in motion**: Being transferred across a network
    - Also called **Data in transit**
      - **Examples** :
        - Data copied from on-premise to cloud storage
          - An application talking to a database
    - **Two Types**: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.181.png) In and out of cloud (from internet) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.182.png) Within cloud
    - **Data in use**: Active data processed in a non-persistent state
      - Example: Data in your RAM

143![ref48]

**Encryption ![ref1]**

![ref64] ![ref15] ![ref65]

- If you store data  as  is, what  would happen if an  **unauthorized entity gets access** to it?
  - Imagine losing an unencrypted hard disk
  - **First law of security** : Defense in Depth
    - Typically, enterprises encrypt all data
      - Data on your hard disks
        - Data in your databases
        - Data on your file servers
      - Is it sufficient if you encrypt data at rest?
        - **No**. **Encrypt data in transit** - between application to database as well.

144![ref48]

**Symmetric Key Encryption ![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.183.png)

- Symmetric  encryption  algorithms  use  the  **same  key  for  encryption  and decryption**
  - Key Factor 1: Choose the **right encryption algorithm**
    - Key Factor 2: How do we **secure the encryption key**?
      - Key Factor 3: How do we **share the encryption key**?

145![ref48]

**Asymmetric Key Encryption ![ref1]**

- **Two Keys** : Public Key and Private Key ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.184.png)
  - Also called **Public Key Cyptography** 
    - Encrypt  data  with  Public  Key  and decrypt with Private Key 
      - Share Public Key with everybody and keep  the  Private  Key  with  you(YEAH, ITS PRIVATE!) 
        - No crazy questions: 
          - Will  somebody  not  figure  out  private  key using the public key? 
          - How do you create Asymmetric Keys? 

[**https://commons.wikimedia.org/wiki/File:Asymmetric_encry**](https://commons.wikimedia.org/wiki/File:Asymmetric_encryption_\(colored\).png)

146![ref48]

**Cloud KMS ![ref1]**

- Create  and  manage  **cryptographic  keys**  (symmetric  and ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.185.png)asymmetric) 
  - **Control their use** in your applications and GCP Services 
    - Provides an API to encrypt, decrypt, or sign data 
      - Use existing cryptographic keys created on premises
        - **Integrates  with  almost  all  GCP  services**  that  need  data encryption:
          - Google-managed key: No configuration required
            - Customer-managed key: Use key from KMS
              - Customer-supplied key: Provide your own key

147![ref48]

**Storage![ref1]**

148![ref48]

**Storage Types - Block Storage and File Storage ![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.186.png)

- What is the type of storage of your hard disk?
  - **Block Storage**
  - You've created a file share to share a set of files with your colleagues in a enterprise. What type of storage are you using?
    - **File Storage**

149![ref48]

**Block Storage ![ref1]**

- Use  case:  Harddisks  attached  to  your ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.187.png)computers 
  - Typically,  ONE  Block  Storage  device  can  be connected to ONE virtual server 
    - (EXCEPTIONS) You can attach read only block devices with  multiple  virtual  servers  and  certain  cloud providers are exploring multi-writer disks as well! 
    - HOWEVER, you can connect multiple different block storage devices to one virtual server
      - Used as:
        - **Direct-attached storage (DAS)** - Similar to a hard disk
        - **Storage  Area  Network  (SAN)**  -  High-speed  network connecting a pool of storage devices
          - Used by Databases - Oracle and Microso SQL Server

150![ref48]

**File Storage ![ref1]**

- Media  workflows  need  huge  shared ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.188.png)storage  for  supporting  processes  like video editing 
  - Enterprise users need a quick way to share files in a  secure and  organized way 
    - These file shares are shared by several virtual servers 

151![ref48]

**GCP - Block Storage and File Storage ![ref1]**

![ref13] ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.189.png)

- **Block Storage**:
  - **Persistent Disks**: Network Block Storage
    - Zonal: Data replicated in one zone
      - Regional: Data replicated in multiple zone
    - **Local SSDs**: Local Block Storage
  - **File Storage**:
    - **Filestore**: High performance file storage

152![ref48]

**GCP - Block Storage ![ref1]**

- Two popular types of block storage can be attached to VM instances:
  - **Local SSDs**
    - **Persistent Disks**
  - **Local SSDs** are physically attached to the host of the VM instance
    - Temporary data
      - Lifecycle tied to VM instance
    - **Persistent Disks** are network storage
      - More durable
      - Lifecycle NOT tied to VM instance

153![ref48]

**Local SSDs ![ref1]**

- **Physically attached** to the host of VM instance:
  - Provide very high (IOPS) and very low latency
    - (BUT) **Ephemeral storage** - Temporary data (Data persists only until instance is running)
      - **Enable live migration** for data to survive maintenance events
    - Data automatically encrypted
      - HOWEVER, you CANNOT configure encryption keys!
    - Lifecycle tied to VM instance
    - ONLY some machine types support Local SSDs
      - Supports SCSI and NVMe interfaces
  - Remember:
    - Choose NVMe-enabled and multi-queue SCSI images for best performance
    - Larger Local SSDs (more storage), More vCPUs (attached to VM) => Even Better Performance

154![ref48]

**Local SSDs - Advantages and Disadvantages ![ref1]**

- **Advantages**
  - Very Fast I/O (~ 10-100X compared to PDs)
    - Higher throughput and lower latency
  - Ideal for use cases needing high IOPs while storing **temporary information**
    - Examples: Caches, temporary data, scratch files etc
  - **Disadvantages**
    - **Ephemeral storage**
      - Lower durability, lower availability, lower flexibility compared to PDs
    - You **CANNOT detach and attach** it to another VM instance

155![ref48]

**Persistent Disks (PD) ![ref1]**

- **Network block storage** attached to your VM instance ![ref17]
  - **Provisioned capacity** 
    - Very Flexible: ![ref18]
      - **Increase size when you need it** - when attached to VM instance 
        - Performance scales with size ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.190.png)![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.191.png) For higher performance, resize or add more PDs 
      - **Independent lifecycle** from VM instance 
        - Attach/Detach from one VM instance to another 
        - Options: Regional and Zonal
          - Zonal PDs replicated in single zone. Regional PDs replicated in 2 zones in same Region. ![ref20] Typically Regional PDs are 2X the cost of Zonal PDs
          - **Use case** : Run your custom database

156![ref48]

**Persistent Disks vs Local SSDs ![ref1]**

**Feature Persistent Disks Local SSDs Attachment to VM instance![ref66]** As a network drive Physically attached ![ref67]**Lifecycle** Separate from VM instance Tied with VM instance ![ref66]**I/O Speed** Lower (network latency) 10-100X of PDs ![ref67]**Snapshots** Supported Not Supported![ref66]

**Use case** Permanent storage Ephemeral storage![ref67]

157![ref48]

**Persistent Disks - Standard vs Balanced vs SSD ![ref1]**

**Feature Standard Balanced SSD Underlying Storage![ref68]** Hard Disk Drive Solid State Drive Solid State

Drive![ref69]

**Referred to as** pd-standard pd-balanced pd-ssd ![ref70]**Performance - Sequential IOPS (Big** Good Good Very Good

**Data/Batch)![ref68]**

**Performance - Random IOPS** Bad Good Very Good **(Transactional Apps)![ref69]**

**Cost** Cheapest In Between Expensive ![ref70]**Use cases** Big Data (cost Balance between cost and High

efficient) performance Performance![ref68]

158![ref48]

**Persistent Disks - Snapshots ![ref1]**

- Take **point-in-time snapshots** of your Persistent Disks ![ref71]
  - You can also schedule snapshots (configure a schedule): 
    - You can also auto-delete snapshots aer X days ![ref18]
    - Snapshots can be Multi-regional and Regional 
      - You can share snapshots across projects ![ref72]
        - You can create new disks and instances from snapshots 
          - Snapshots are **incremental**:
            - Deleting a snapshot **only deletes data which is NOT needed** by other snapshots
            - Keep similar data together on a Persistent Disk: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.199.png) Separate your operating system, volatile data and permanent data ![ref20] Attach multiple disks if needed ![ref20] This helps to better organize your snapshots and images

159![ref48]

**Persistent Disks - Snapshots - Recommendations ![ref1]**

- **Avoid** taking snapshots more oen than once an hour ![ref71]
  - Disk volume is available for use **but Snapshots reduce performance** 
    - (RECOMMENDED) Schedule snapshots during off-peak hours ![ref18]
    - Creating snapshots from disk is faster than creating from images: 
      - But creating disks from image is faster than creating from snapshots ![ref72]
        - (RECOMMENDED) If you are repeatedly creating disks from a snapshot: 
          - Create an image from snapshot and use the image to create disks
      - Snapshots are **incremental**:
        - BUT you don't lose data by deleting older snapshots
        - Deleting a snapshot **only deletes data which is NOT needed** by other snapshots
          - (RECOMMENDED) Do not hesitate to delete unnecessary snapshots

160![ref48]

**Playing with Machine Images ![ref1]**

- (Remember) **Machine Image** is different from Image ![ref73]
  - **Multiple disks can be attached** with a VM: ![ref74]
    - One Boot Disk (Your OS runs from Boot Disk) 
      - Multiple Data Disks ![ref75]
    - An image is created from the boot Persistent Disk ![ref76]
      - HOWEVER, a Machine Image is created from a VM instance: 
        - Machine Image **contains everything you need** to create a VM instance: ![ref75]
          - Configuration ![ref77]![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.205.png) Metadata ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.206.png) Permissions ![ref73]![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.207.png) Data from one or more disks 
        - **Recommended for** disk backups, instance cloning and replication 

161![ref48]

**Let's Compare ![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.208.jpeg)

[**https://cloud.google.com/compute/docs/machine-images**](https://cloud.google.com/compute/docs/machine-images)

162![ref48]

**Playing with Disks - Command Line ![ref1]**

- **gcloud compute disks list/create/delete/resize/snapshot ![ref74]**
  - gcloud compute disks **create** my-disk-1 --zone=us-east1-a 
    - What should be the size and type? ![ref75]![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.209.png) --size=SIZE (1GB or 2TB) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.210.png) --type=TYPE (default - pd-standard) (gcloud compute disk-types list) ![ref73]
      - What should be on the disk? ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.211.png) --image --image-family --source-disk --source-snapshot 
        - How should data on disk be encrypted? ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.212.png) --kms-key --kms-project
    - gcloud compute disks **resize** example-disk-1 --size=6TB
      - Only increasing disk size is supported
      - gcloud  compute  disks  **snapshot**  test  --zone=us-central1-a  --snapshot- names=snapshot-test
        - You can also play with the snapshots which are created: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.213.png) gcloud compute snapshots list/describe/delete

163![ref48]

**Playing with Images - Command Line ![ref1]**

- **gcloud compute images ![ref71]**
  - Actions: **create/delete/deprecate/describe/export/import/list/update** 
    - Creating Images ![ref75]
      - gcloud compute images **create** my-image ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.214.png) From a Disk - --source-disk=my-disk --source-disk-zone=us-east1-a ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.215.png)![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.216.png) From a Snapshot - --source-snapshot=source-snapshot ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.217.png) From another image - --source-image=source-image --source-image-project=source-image-project ![ref49] From  latest  non  deprecated  image  from  a  family  -  --source-image-family=source-image-family  --source-image- project=source-image-project
      - Deprecate Image
        - gcloud compute images **deprecate** IMAGE --state=DEPRECATED
        - Exports virtual disk images
          - gcloud compute images **export** --image=my-image --destination-uri=gs://my-bucket/my-image.vmdk - -export-format=vmdk --project=my-project
    - Other Examples:
      - gcloud compute images **delete** my-image1 my-image2 ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.218.png) gcloud compute images **list** --format="value(NAME)"

164![ref48]

**Playing with Machine Images - Command Line ![ref1]**

- (Remember) gcloud commands for machine images are IN BETA ![ref73]
  - Commands: ![ref74]
    - Create Machine Image: 
      - **gcloud  beta  compute  machine-images  create  MACHINE\_IMAGE\_NAME  --source-instance SOURCE\_INSTANCE\_NAME ![ref75]**
      - Create an Instance from the Machine Image: ![ref76]
        - **gcloud  beta  compute  instances  create  VM\_NAME  --zone  ZONE  --source-machine-image SOURCE\_MACHINE\_IMAGE\_NAME ![ref75]**

![ref77]

![ref73]

165![ref48]

**Storage - Scenarios - Persistent Disks ![ref1]**

**Scenario Solution![ref78]**

**You want to improve performance of Persistent Disks (PD)** Increase size of PD or Add more PDs. Increase

vCPUs in your VM.![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.220.png)

**You want to increase durability of Persistent Disks (PD)** Go for Regional PDs (2X cost but replicated in 2

zones)![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.221.png)

**You want to take hourly backup of Persistent Disks (PD)** Schedule hourly snapshots!

**for disaster recovery![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.222.png)**

**You want to delete old snapshots created by scheduled** Configure it as part of your snapshot scheduling! **snapshots![ref78]**

166![ref48]

**Cloud Filestore ![ref1]**

- **Shared cloud file storage**: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.223.png)
  - Supports NFSv3 protocol 
    - Provisioned Capacity 
  - Suitable for **high performance** workloads: 
    - Up to 320 TB with throughput of 16 GB/s and 480K IOPS 
    - Supports  HDD  (general  purpose)  and  SSD (performance-critical workloads)
      - **Use cases** : file share, media workflows and content management

167![ref48]

**Review - Global, Regional and Zonal Resources ![ref1]**

- **Global**
  - Images
    - Snapshots
      - Instance templates (Unless you use zonal resources in your templates)
  - **Regional**
    - Regional managed instance groups
    - Regional persistent disks
    - **Zonal**
      - Zonal managed instance groups
        - Instances
          - Persistent disks
            - You can attach a disk only to instances in the same zone as the disk

168![ref48]

**Storage - Scenarios ![ref1]**

**Scenario Solution You want Very High IOPS but your data can be lost without a problem![ref79]** Local SSDs ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.225.png)**You want to create a high perfomance file sharing system in GCP which can be** Filestore

**attached with multiple VMs![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.226.png)**

**You want to backup your VM configuration along with all its attached Persistent Disks** Create a Machine

Image![ref79]

**You want to make it easy to launch VMs with hardened OS and customized soware** Create a Custom

Image![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.227.png)

169![ref48]

**Object Storage - Cloud Storage![ref1]**

170![ref48]

**Cloud Storage ![ref1]**

- **Most popular, very flexible & inexpensive** storage service ![ref80]
  - Serverless: Autoscaling and infinite scale 
  - Store large objects using a **key-value** approach: 
    - Treats entire object as a unit (Partial updates not allowed) 
      - Recommended when you operate on entire object most of the time ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.229.png) Access Control at Object level
    - Also called **Object Storage**
    - Provides REST API to access and modify objects
      - Also provides CLI (gsutil) & Client Libraries (C++, C#, Java, Node.js, PHP, Python & Ruby)
      - **Store all file types** - text, binary, backup & archives:
        - Media files and archives, Application packages and logs
          - Backups of your databases or storage devices
        - Staging data during on-premise to cloud database migration

171![ref48]

**Cloud Storage - Objects and Buckets ![ref1]**

- Objects are stored in buckets ![ref80]
  - Bucket names are **globally unique** 
    - Bucket names are used as part of object URLs => Can contain ONLY lower case letters, numbers, hyphens, underscores and periods. 
      - 3-63 characters max. Can't start with **goog prefix** or should not contain **google (even misspelled)**
  - Unlimited objects in a bucket
    - Each bucket is associated with a project
  - Each object is identified by a **unique key**
    - **Key is unique** in a bucket
    - Max object size is **5 TB**
      - BUT you can store unlimited number of such objects

172![ref48]

**Cloud Storage - Storage Classes - Introduction ![ref1]**

- **Different kinds of data** can be stored in Cloud Storage ![ref80]
  - Media files and archives 
    - Application packages and logs 
      - Backups of your databases or storage devices 
        - Long term archives 
  - Huge variations in **access patterns**
    - Can I pay a cheaper price for objects I access less frequently?
      - **Storage  classes**  help  to  optimize  your  costs  based  on  your access needs
        - Designed for durability of **99.999999999%(11 9’s)**

173![ref48]

**Cloud Storage - Storage Classes - Comparison ![ref1]**

**Storage Name Minimum Typical Monthly availability Use case Class Storage**

**duration![ref81]**

**Standard** STANDARD None > 99.99% in multi region and dual Frequently used

region, 99.99% in regions data/Short period of time ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.231.png)**Nearline** NEARLINE 30 days 99.95% in multi region and dual Read or modify **once a**

**storage** region, 99.9% in regions **month** on average ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.232.png)**Coldline** COLDLINE 90 days 99.95% in multi region and dual Read or modify **at most**

**storage** region, 99.9% in regions **once a quarter Archive![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.233.png)** ARCHIVE 365 days 99.95% in multi region and dual **Less than once a year**

**storage** region, 99.9% in regions![ref81]

174![ref48]

**Features across Storage Classes ![ref1]**

- High durability (99.999999999% annual durability) ![ref80]
  - **Low** latency (first byte typically in tens of milliseconds) 
    - **Unlimited** storage 
      - Autoscaling (No configuration needed) 
        - **NO minimum** object size
      - Same APIs across storage classes
        - **Committed  SLA**  is  99.95%  for  multi  region  and  99.9%  for single  region  for  Standard,  Nearline  and  Coldline  storage classes
          - No committed SLA for Archive storage

175![ref48]

**Cloud Storage - Uploading and Downloading Objects ![ref1]**

**Option Recommended for Scenarios![ref82]**

**Simple Upload** Small files (that can be re uploaded in case of failures) + NO object metadata ![ref83]**Multipart upload** Small files (that can be re uploaded in case of failures) + object metadata ![ref82]**Resumable upload** Larger files. RECOMMENDED for most usecases  

(even for small files - costs one additional HTTP request)![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.236.png)

**Streaming transfers** Upload an object of unknown size![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.237.png)

**Parallel composite uploads** File divided up to 32 chunks and uploaded in parallel.  

Significantly faster if network and disk speed are not limiting factors.![ref82]

**Simple download** Downloading objects to a destination ![ref83]**Streaming download** Downloading data to a process ![ref82]**Sliced object download** Slice and download large objects![ref83]

176![ref48]

**Object Versioning ![ref1]**

- Prevents **accidental deletion** & provides history ![ref80]
  - Enabled at bucket level 
    - Can be turned on/off at any time 
  - **Live version** is the latest version 
    - If you delete live object, it becomes noncurrent object version 
      - If you delete noncurrent object version, it is deleted
    - Older  versions  are  uniquely  identified  by  (object  key  +  a  generation number)
  - Reduce costs by deleting older (noncurrent) versions!

177![ref48]

**Object Lifecycle Management ![ref1]**

- Files are frequently accessed when they are created ![ref84]
  - Generally **usage reduces with time** 
    - How do you save costs by **moving files automatically between storage classes**? 
      - Solution: Object Lifecycle Management 
  - Identify objects using conditions based on:
    - Age, CreatedBefore, IsLive, MatchesStorageClass, NumberOfNewerVersions etc
      - Set multiple conditions: all conditions must be satisfied for action to happen
    - Two kinds of actions:
      - **SetStorageClass** actions (change from one storage class to another)
        - **Deletion** actions (delete objects)
      - Allowed Transitions:
        - (Standard or Multi-Regional or Regional) to (Nearline or Coldline or Archive)
          - Nearline to (Coldline or Archive)
            - Coldline to Archive

178![ref48]

**Object Lifecycle Management - Example Rule ![ref1]**

{ 

`    `"lifecycle": { 

`      `"rule": [ 

`      `{ 

`        `"action": {"type": "Delete"}, 

`        `"condition": { 

`          `"age": 30, 

`          `"isLive": true

`        `} 

`      `},

`      `{ 

`        `"action": { 

`          `"type": "SetStorageClass", 

`          `"storageClass": "NEARLINE" 

`        `}, 

`        `"condition": { 

`          `"age": 365, 

`          `"matchesStorageClass": ["STANDARD"]         } 

`      `}       

`    `] 

`    `} 

} 

179![ref48]

**Cloud Storage - Encryption ![ref1]**

- Cloud Storage always encrypts data on the server side! ![ref31]
  - Configure  **Server-side**  encryption:  Encryption  performed  by  Cloud Storage 
    - **Google-managed encryption key** - Default (No configuration required) ![ref18]
      - **Customer-managed**  encryption  keys  -  Created  using  **Cloud  Key  Management Service (KMS)**. Managed by customer in KMS. ![ref85]
        - Cloud Storage Service Account should have access to keys in KMS for encrypting and decrypting using the **Customer-Managed** encryption key 
    - (OPTIONAL)  **Client-side**  encryption  -  Encryption  performed  by customer before upload
      - GCP does NOT know about the keys used

180![ref48]

**Cloud Storage - Scenarios ![ref1]**

**Scenario Description![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.240.png)**

**How do you speed up large uploads (example: 100 GB) to** Use **Parallel composite uploads** (File is **Cloud Storage?** broken in to small chunks and uploaded)![ref86]

**You want to permanently store application logs for regulatory** Cloud storage - Archive **reasons. You don't expect to access them at all.![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.242.png)**

**Log files stored in Cloud storage. You expect to access them** Cold Line

**once in quarter.![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.243.png)**

**How do you change storage class of an existing bucket in** Step 1: Change Default Storage Class of the **Cloud Storage?** bucket.  

Step 2: Update the Storage Class of the objects in the bucket.![ref86]

181![ref48]

**Cloud Storage - Command Line - gsutil - 1 ![ref1]**

- (REMEMBER) **gsutil** is the CLI for Cloud Storage (**NOT gcloud**) ![ref84]
  - Cloud Storage (**gsutil**) 
    - gsutil **mb** gs://BKT\_NAME (Create Cloud Storage bucket) 
      - gsutil **ls -a** gs://BKT\_NAME (List current and non-current object versions) 
    - gsutil **cp** gs://SRC\_BKT/SRC\_OBJ gs://DESTN\_BKT/NAME\_COPY (Copy objects)
      - -o '**GSUtil:encryption\_key=ENCRYPTION\_KEY**' - Encrypt Object
      - gsutil **mv** (Rename/Move objects)
        - gsutil mv gs://BKT\_NAME/OLD\_OBJ\_NAME gs://BKT\_NAME/NEW\_OBJ\_NAME
          - gsutil mv gs://OLD\_BUCKET\_NAME/OLD\_OBJECT\_NAME gs://NEW\_BKT\_NAME/NEW\_OBJ\_NAME
      - gsutil  **rewrite**  -s  STORAGE\_CLASS  gs://BKT\_NAME/OBJ\_PATH  (Ex:  Change  Storage Class for objects)
        - gsutil **cp** : Upload and Download Objects
          - gsutil cp LOCAL\_LOCATION gs://DESTINATION\_BKT\_NAME/ (Upload) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.244.png) gsutil cp gs://BKT\_NAME/OBJ\_PATH LOCAL\_LOCATION (Download)

182![ref48]

**Cloud Storage - Command Line - gsutil - 2 ![ref1]**

- Cloud Storage (gsutil) ![ref84]
  - gsutil **versioning set on/off** gs://BKT\_NAME (Enable/Disable Versioning) 
    - gsutil **uniformbucketlevelaccess set on/off** gs://BKT\_NAME 
  - gsutil **acl ch** (Set Access Permissions for Specific Objects) 
    - gsutil acl ch -u AllUsers:R gs://BKT\_NAME/OBJ\_PATH (Make specific object public)
      - gsutil acl ch -u john.doe@example.com:WRITE gs://BKT\_NAME/OBJ\_PATH ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.245.png) Permissions - READ (R), WRITE (W), OWNER (O) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.246.png) Scope - User, allAuthenticatedUsers, allUsers(-u), Group (-g), Project (-p) etc
        - gsutil acl set JSON\_FILE gs://BKT\_NAME
    - gsutil **iam ch** MBR\_TYPE:MBR\_NAME:IAM\_ROLE gs://BKT\_NAME (Setup IAM role)
      - gsutil iam ch user:me@myemail.com:objectCreator gs://BKT\_NAME ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.247.png) gsutil iam ch allUsers:objectViewer gs://BKT\_NAME (make the entire bucket readable)
      - gsutil **signurl -d 10m** YOUR\_KEY gs://BUCKET\_NAME/OBJECT\_PATH (Signed URL for temporary access)

183![ref48]

**Cloud Storage - Command Line - gcloud storage ![ref1]**

- Earlier, **gsutil** was the recommended CLI for Cloud Storage ![ref84]
  - **GCLOUD STORAGE** is now the recommended CLI for Cloud Storage 
    - Advantages: 
      - Upto 94% faster storage transfers 
        - Better parallel processing 
          - Do NOT worry about options/parameters/flags
            - **gcloud storage** will decide the optimal storage transfer approach for you
              - Provides very simple to remember commands (consistent with gcloud):![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.248.png)

**gcloud storage buckets create gs://BKT\_NAME** (Create Cloud Storage bucket)

- options: --default-encryption-key, --default-storage-class
- **gcloud storage buckets delete gs://BKT\_NAME**
  - **gcloud storage buckets list gs://B\***
    - **gcloud storage buckets describe gs://BKT\_NAME**
      - **gcloud storage buckets update gs://BKT\_NAME ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.249.png)** options: --default-encryption-key, --default-storage-class, --[no-]versioning
- If you have existing scripts that make use of gsutil commands AND
  - You do NOT want to change the scripts AND
    - You want the performance benefits offered by new features in **gcloud storage**
      - Check out **shim** (In boto configuration file, configure use\_gcloud\_storage=True under GSUtil section)

184![ref48]

**IAM![ref1]**

185![ref48]

**Typical identity management in the cloud ![ref1]**

- You have **resources** in the cloud (examples - a virtual server, a ![ref87]database etc) 
  - You  have  **identities (human  and  non-human)**  that  need  to access those resources and perform actions 
    - For example: launch (stop, start or terminate) a virtual server
    - How do you **identify users** in the cloud?
      - How do you configure resources they can access?
        - How can you configure what actions to allow?
      - In GCP: Identity and Access Management (Cloud IAM) provides this service

186![ref48]

**Cloud Identity and Access Management (IAM) ![ref1]**

- **Authentication** (is it the right user?) and ![ref87]
  - **Authorization** (do they have the right access?) 
    - **Identities** can be 
      - A GCP User (Google Account or Externally Authenticated User) 
        - A Group of GCP Users
          - An Application running in GCP
            - An Application running in your data center
            - Unauthenticated users
      - Provides very **granular** control
        - Limit a single user:
          - to perform single action ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.251.png) on a specific cloud resource ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.252.png) from a specific IP address ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.253.png) during a specific time window

187![ref48]

**Cloud IAM Example ![ref1]**

- I want to provide access to manage a specific cloud storage bucket to ![ref31]a colleague of mine: 
  - Important Generic Concepts: 
    - **Member**: My colleague 
      - **Resource**: Specific cloud storage bucket ![ref18]
        - **Action**: Upload/Delete Objects 
    - In Google Cloud IAM: ![ref85]![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.254.png) **Roles**: A set of permissions (to perform specific actions on specific resources) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.255.png) **Roles do NOT know about members**. It is all about permissions! ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.256.png) How do you assign permissions to a member? ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.257.png) **Policy**: You assign (or **bind**) a role to a member
  - 1: **Choose a Role** with right permissions (Ex: Storage Object Admin)
    - 2: **Create Policy** binding member (your friend) with role (permissions)
      - IAM in AWS is very different from GCP (Forget AWS IAM & Start FRESH!)
        - Example: Role in AWS is NOT the same as Role in GCP

188![ref48]

**IAM - Roles ![ref1]**

- **Roles are Permissions**: ![ref88]
  - Perform some set of actions on some set of resources 
  - Three Types: 
    - **Basic Roles (or Primitive roles)** - Owner/Editor/Viewer 
      - **Viewer(roles.viewer)** - Read-only actions
        - **Editor(roles.editor)** - Viewer + Edit actions
          - **Owner(roles.owner)** - Editor + Manage Roles and Permissions + Billing
            - EARLIEST VERSION: Created before IAM
              - NOT RECOMMENDED: **Don't use in production**
    - **Predefined Roles** - Fine grained roles predefined and managed by Google ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.259.png) Different roles for different purposes ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.260.png) **Examples**: Storage Admin, Storage Object Admin, Storage Object Viewer, Storage Object Creator
    - **Custom Roles** - When predefined roles are NOT sufficient, you can create your own custom roles

189![ref48]

**IAM - Predefined Roles - Example Permissions ![ref1]**

- Important **Cloud Storage Roles**: ![ref87]
  - **Storage Admin (roles/storage.admin)** 
    - storage.buckets.\* 
      - storage.objects.\* 
    - **Storage Object Admin (roles/storage.objectAdmin)** 
      - storage.objects.\*
    - **Storage Object Creator (roles/storage.objectCreator)**
      - storage.objects.create
    - **Storage Object Viewer (roles/storage.objectViewer) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.261.png)** storage.objects.get ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.262.png) storage.objects.list
  - All four roles have these permissions:
    - resourcemanager.projects.get
    - resourcemanager.projects.list

190![ref48]

**IAM - Most Important Concepts - A Review ![ref1]**

- **Member** : Who? ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.263.png)
  - **Roles**  :  Permissions  (What  Actions?  What Resources?) 
    - **Policy** : Assign Permissions to Members 
      - Map Roles (What?) , Members (Who?) and Conditions (Which Resources?, When?, From Where?) 
        - Remember: Permissions are NOT directly assigned to Member 
          - Permissions are represented by a Role 
            - Member gets permissions through Role! 
      - A Role can have multiple permissions 
        - You can assign multiple roles to a Member 

191![ref48]

**IAM policy ![ref1]**

- Roles are assigned to users through **IAM Policy** documents ![ref87]
  - Represented by a **policy object** 
    - Policy object has list of bindings 
      - A binding, binds a role to list of members 
    - Member type is identified by **prefix**:
      - Example: user, serviceaccount, group or domain

192![ref48]

**IAM policy - Example ![ref1]**

{ 

`  `"bindings": [ 

`    `{ 

`      `"role": "roles/storage.objectAdmin", 

`       `"members": [ 

`         `"user:you@in28minutes.com", 

`         `"serviceAccount:myAppName@appspot.gserviceaccount.com", 

`         `"group:administrators@in28minutes.com", 

`         `"domain:google.com" 

`       `]

`    `}, 

`    `{ 

`      `"role": "roles/storage.objectViewer", 

`      `"members": [ 

`        `"user:you@in28minutes.com" 

`      `],

`      `"condition": { 

`        `"title": "Limited time access", 

`        `"description": "Only upto Feb 2022", 

`        `"expression": "request.time < timestamp('2022-02-01T00:00:00.000Z')", 

`      `}     } 

`  `] 

} 

193![ref48]

**Playing With IAM ![ref1]**

- **gcloud**: Playing with IAM ![ref24]
  - gcloud **compute project-info** describe - Describe current project 
    - gcloud **auth login** - Access the Cloud Platform with Google user credentials 
      - gcloud **auth revoke** - Revoke access credentials for an account 
        - gcloud **auth list** - List active accounts
        - gcloud **projects**
          - gcloud projects **add-iam-policy-binding** - Add IAM policy binding
            - gcloud projects **get-iam-policy** - Get IAM policy for a project
              - gcloud projects **remove-iam-policy-binding** - Remove IAM policy binding
                - gcloud projects **set-iam-policy** - Set the IAM policy ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.264.png) gcloud projects **delete** - Delete a project
        - gcloud **iam ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.265.png)** gcloud iam **roles describe** - Describe an IAM role ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.266.png) gcloud iam **roles create** - create an iam role(--project, --permissions, --stage) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.267.png) gcloud iam **roles copy** - Copy IAM Roles

194![ref48]

**Service Accounts ![ref1]**

- Scenario: An Application on a VM needs access to cloud storage ![ref74]
  - You DONT want to use personal credentials to allow access 
  - (RECOMMENDED) Use **Service Accounts ![ref18]**
    - Identified by an email address (Ex: id-compute@developer.gserviceaccount.com) 
      - Does NOT have password ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.268.png)
        - Has a **private/public RSA key-pairs** 
          - Can't login via browsers or cookies 
    - Service account types:
      - **Default service account** - Automatically created when some services are used
        - (NOT RECOMMENDED) Has **Editor role** by default
      - **User Managed** - User created ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.269.png) (RECOMMENDED) Provides fine grained access control
      - **Google-managed service** accounts - Created and managed by Google ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.270.png) Used by GCP to perform operations on user's behalf ![ref89] In general, we DO NOT need to worry about them

195![ref48]

**Use case 1 : VM <-> Cloud Storage ![ref1]**

![ref64] ![ref15] ![ref90]

- **1:** Create a Service Account Role with the right permissions
  - **2:** Assign Service Account role to VM instance
    - **Uses Google Cloud-managed keys**:
      - Key generation and use are automatically handled by IAM when we assign a service account to the instance
        - Automatically rotated
        - No need to store credentials in config files
      - **Do NOT delete** service accounts used by running instances:
        - Applications running on those instances will lose access!

196![ref48]

**Use case 2 : On Prem <-> Cloud Storage (Long Lived) ![ref1]**

- You **CANNOT assign Service Account directly to an On Prem App ![ref31]**
  - **1:** Create a **Service Account** with right permissions 
    - **2:** Create a **Service Account User Managed Key** 
      - **gcloud iam service-accounts keys create ![ref18]**
        - Download the service account key file 
          - Keep it secure (It can be used to impersonate service account)! ![ref85]
      - **3:** Make the service account key file accessible to your application 
        - Set environment variable GOOGLE\_APPLICATION\_CREDENTIALS ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.273.png) **export GOOGLE\_APPLICATION\_CREDENTIALS="/PATH\_TO\_KEY\_FILE"**
        - **4:** Use **Google Cloud Client Libraries**
          - Google Cloud Client Libraries use a library - Application Default Credentials (ADC) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.274.png) ADC uses the service account key file if env var GOOGLE\_APPLICATION\_CREDENTIALS exists!

197![ref48]

**Use case 3 : On Prem <-> Google Cloud APIs (Short Lived)![ref1]**

- **Make calls from outside GCP to Google Cloud APIs** with short ![ref87]lived permissions 
  - Few hours or shorter 
    - **Less risk** compared to sharing service account keys! 
  - **Credential Types**:
    - OAuth 2.0 access tokens
      - OpenID Connect ID tokens
      - Self-signed JSON Web Tokens (JWTs)
    - **Examples**:
      - When a member needs elevated permissions, he can assume the service account role (Create OAuth 2.0 access token for service account)
        - OpenID  Connect  ID  tokens  is  recommended  for  service  to  service authentications:
          - A service in GCP needs to authenticate itself to a service in other cloud

198![ref48]

**Service Account Use case Scenarios ![ref1]**

**Scenario Solution![ref91]**

**Application on a VM wants to talk to a** Configure the VM to use a Service Account with right permissions **Cloud Storage bucket![ref92]**

**Application on a VM wants to put a** Configure the VM to use a Service Account with right permissions **message on a Pub Sub Topic![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.277.png)**

**Is Service Account an identity or a** It is both. You can attach roles with Service Account (identity). **resource?** You can let other members access a SA by granting them a role on

the Service Account (resource).![ref92]

199![ref48]![ref91]

**VM instance with default service account in Project A needs to access Cloud Storage bucket in Project B**

In project B, add the service account from Project A and assign Storage Object Viewer Permission on the bucket

199![ref48]![ref91]

**ACL (Access Control Lists) ![ref87]![ref1]**

- **ACL**: Define **who** has access to your buckets and objects, as well as **what level** of access they have 
  - **How is this different from IAM?**
    - IAM permissions apply to all objects within a bucket
      - ACLs can be used to customized specific accesses to different objects
    - User gets access if he is allowed by either IAM or ACL!
      - (Remember) **Use IAM for common permissions** to all objects in a bucket
        - (Remember)  **Use  ACLs**  if  you  need  to  **customize  access  to individual objects**

200![ref48]

**Access Control - Overview ![ref1]**

- How  do  you  control  access  to  objects  in  a  Cloud  Storage ![ref87]bucket? 
  - Two types of access controls: 
    - **Uniform** (Recommended) - Uniform bucket level access using IAM 
      - **Fine-grained** - Use IAM and ACLs to control access:
        - Both bucket level and individual object level permissions
    - Use Uniform access when all users have same level of access across all objects in a bucket
      - Fine grained access with ACLs can be used when you need to customize the access at an object level
        - Give a user specific access to edit specific objects in a bucket

201![ref48]

**Cloud Storage - Signed URL ![ref1]**

- You would want to **allow a user limited time access** to your ![ref80]objects: 
  - Users do NOT need Google accounts 
  - Use **Signed URL** functionality 
    - A URL that gives **permissions for limited time duration** to perform specific actions
    - **To create a Signed URL**:
      - **1:** Create a key (YOUR\_KEY) for the Service Account/User with the desired permissions
      - **2:** Create Signed URL with the key:
        - **gsutil signurl -d 10m YOUR\_KEY gs://BUCKET\_NAME/OBJECT\_PATH**

202![ref48]

**Cloud Storage - Static website ![ref1]**

![ref31] ![ref15] ![ref90]

- **1:** Create a bucket with the **same name** as website name (Name of bucket should match DNS name of the website)
  - **Verify** that the domain is owned by you
  - **2:** Copy the files to the bucket
    - Add index and error html files for better user experience
    - **3:** Add member **allUsers** and grant **Storage Object Viewer** option
      - Select **Allow Public Access**

203![ref48]

**Database Fundamentals![ref1]**

204![ref48]

**Databases Primer ![ref1]**

- Databases provide **organized** and **persistent** storage for your ![ref93]data 
  - To **choose between different database types**, we would need to understand: 
    - Availability 
      - Durability 
        - RTO
          - RPO
          - Consistency
    - Transactions etc
    - Let's get started on a **simple journey** to understand these

205![ref48]

**Database - Getting Started ![ref1]**

- Imagine  a  database  deployed  **in  a  data  center  in ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.279.png)London** 
  - Let's consider some challenges: 
    - **Challenge  1**:  Your  database  will  go  down  if  the  data  center crashes or the server storage fails 
      - **Challenge 2**: You will lose data if the database crashes 

206![ref48]

**Database - Snapshots ![ref1]**

- Let's  automate  taking  copy  of  the  database ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.280.png)(**take a snapshot**) every hour to another data center in London 
  - Let's consider some challenges: 
    - **Challenge 1**:  Your  database  will  go  down  if  the  data center crashes 
      - **Challenge 2** (PARTIALLY SOLVED): You will lose data if the database crashes 
        - You can setup database from latest snapshot. But depending on when failure occurs you can lose up to an hour of data 
        - **Challenge  3**(NEW):  Database  will  be  slow  when  you take snapshots

207![ref48]

**Database - Transaction Logs ![ref1]**

- Let's  add  **transaction logs**  to  database  and ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.281.png)create a **process to copy it over** to the second data center 
  - Let's consider some challenges: 
    - **Challenge 1**:  Your  database  will  go  down  if  the  data center crashes 
      - **Challenge  2**  (SOLVED):  You  will  lose  data  if  the database crashes 
        - You  can  setup  database  from  latest  snapshot  and  apply transaction logs 
        - **Challenge  3**:  Database  will  be  slow  when  you  take snapshots

208![ref48]

**Database - Add a Standby ![ref1]**

- Let's  add  a  **standby database**  in  the ![ref94]second data center with replication 
  - Let's consider some challenges: 
    - **Challenge 1** (SOLVED): Your database will go down if the data center crashes 
      - You can switch to the standby database 
      - **Challenge 2**  (SOLVED):  You  will  lose  data  if the database crashes 
        - **Challenge 3** (SOLVED): Database will be slow when you take snapshots 
          - Take snapshots from standby. 
            - Applications  connecting  to  master  will  get  good performance always

209![ref48]

**Availability and Durability ![ref1]**

- **Availability**
  - Will I be able to access my data now and when I need it?
    - Percentage of time an application provides the operations expected of it
  - **Durability**
    - Will my data be available aer 10 or 100 or 1000 years?
    - Examples of measuring availability and durability:
      - 4 9's - 99.99
      - 11 9's - 99.999999999
      - Typically, an **availability of four 9's** is considered very good
        - Typically, a **durability of eleven 9's** is considered very good

210![ref48]

**Availability ![ref1]**

**Availability Downtime (in a month) Comment![ref95]**

**99.95%** 22 minutes![ref96]

**99.99% (4 9's)** 4 and 1/2 minutes Typically online apps aim for 99.99% (4 9's) availability ![ref95]**99.999% (5 9's)** 26 seconds Achieving 5 9's availability is tough![ref96]

211![ref52]

**Durability ![ref1]**

- What  does  a  **durability  of  11  9's ![ref94]**mean? 
  - If you **store one million files for ten million years**, you would expect to **lose one file** 
  - Why should durability be high? 
    - Because **we hate losing data** 
      - Once we lose data, it is gone 

212![ref48]

**Increasing Availability and Durability of Databases ![ref1]**

- **Increasing Availability**: ![ref94]
  - Have  multiple  standbys  available  OR distribute the database 
    - in multiple Zones 
      - in multiple Regions 
  - **Increasing Durability**: 
    - Multiple  copies  of  data  (standbys, snapshots, transaction logs and replicas) 
      - in multiple Zones 
        - in multiple Regions 
    - **Replicating data** comes with its own challenges! 
      - We will talk about them a little later

213![ref48]

**Database Terminology : RTO and RPO ![ref1]**

- Imagine a **financial transaction being lost ![ref93]**
  - Imagine a **trade being lost** 
    - Imagine a **stock exchange going down** for an hour 
      - **Typically**  businesses  are  fine  with  some  downtime  but  they hate losing data 
        - Availability and Durability are technical measures
          - How  do  we  measure  **how  quickly  we  can  recover  from failure**?
            - **RPO (Recovery Point Objective)**: Maximum acceptable period of data loss ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.285.png) **RTO (Recovery Time Objective)**: Maximum acceptable downtime
            - Achieving **minimum RTO and RPO is expensive**
              - **Trade-off** based on the criticality of the data

214![ref48]

**Question - RTO and RPO ![ref1]**

- You are running an application in VM instance storing its data on a persistent data  storage.  You  are  taking  snapshots  every  48  hours.  If  the  VM  instance crashes, you can manually bring it back up in 45 minutes from the snapshot. What is your RTO and RPO?
  - RTO - 45 minutes
    - RPO - 48 hours

215![ref48]

**Achieving RTO and RPO - Failover Examples ![ref1]**

**Scenario Solution![ref97]**

**Very small data loss (RPO - 1 minute)   Hot standby** - Automatically synchronize data  **Very small downtime (RTO - 5 minutes)** Have a standby ready to pick up load  

Use automatic failover from master to standby![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.287.png)

**Very small data loss (RPO - 1 minute)   Warm standby** - Automatically synchronize data  **BUT I can tolerate some downtimes (RTO - 15 minutes)** Have a standby with minimum infrastructure  

Scale it up when a failure happens![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.288.png)

**Data is critical (RPO - 1 minute) but I can tolerate** Create regular data **snapshots and transaction downtime of a few hours (RTO - few hours) logs**  

Create database from snapshots and transactions logs when a failure happens![ref97]

**Data can be lost without a problem (for example: cached** Failover to a completely new server **data)![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.289.png)**

216![ref48]

**(New Scenario) Reporting and Analytics Applications ![ref1]**

- New  reporting  and  analytics  applications  are  being ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.290.png)launched using the same database 
  - These applications will ONLY read data 
  - Within  a  few  days  you  see  that  the  database performance is impacted 
    - How can we fix the problem? 
      - **Vertically scale the database** - increase CPU and memory 
        - **Create a database cluster (Distribute the database)** - Typically database clusters are expensive to setup
          - **Create read replicas** - Run read only applications against read replicas

217![ref48]

**Database - Read Replicas ![ref1]**

- Add **read replica ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.291.png)**
  - Connect reporting and analytics applications to **read replica** 
    - Reduces load on the master databases 
      - Upgrade  read  replica  to  master  database (supported by some databases) 
        - Create read replicas **in multiple regions** 
          - **Take snapshots** from read replicas 

218![ref48]

**Consistency ![ref1]**

- How do you ensure that data in multiple database instances ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.292.png)(standbys and replicas) is updated simultaneously? 
  - **Strong consistency** - Synchronous replication to all replicas 
    - Will be slow if you have multiple replicas or standbys 
    - **Eventual consistency** - Asynchronous replication. A little lag - few seconds - before the change is available in all replicas
      - In the intermediate period, different replicas might return different values
        - Used when scalability is more important than data integrity
          - Examples : Social Media Posts - Facebook status messages, Twitter tweets, Linked in posts etc
      - **Read-aer-Write  consistency**  -  Inserts  are  immediately available
        - However, updates would have eventual consistency

219![ref48]

**Database Categories ![ref1]**

- There are **several categories** of databases: ![ref98]
  - Relational (OLTP and OLAP), Document, Key Value, Graph, In Memory among others 
  - **Choosing  type  of  database**  for  your  use  case  is  not  easy.  A  few factors: ![ref99]
    - Do you want a **fixed schema**? 
      - Do you want flexibility in defining and changing your schema? (schemaless) 
    - What level of **transaction properties** do you need? (atomicity and consistency) 
      - What kind of **latency** do you want? (seconds, milliseconds or microseconds) ![ref100]
      - **How  many  transactions**  do  you  expect?  (hundreds  or  thousands  or  millions  of transactions per second) 
    - **How much data** will be stored? (MBs or GBs or TBs or PBs) 
      - and a lot more...![ref101]

220![ref48]

**Relational Databases ![ref1]**

- This  was  the  **only  option**  until  a ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.297.png)decade back! 
  - Most **popular (or unpopular)**  type of databases 
    - **Predefined  schema**  with  tables  and relationships 
      - Very **strong transactional** capabilities 
        - Used for 
          - OLTP  (Online  Transaction  Processing)  use cases and 
            - OLAP  (Online  Analytics  Processing)  use cases 

221![ref48]

**Relational Database - OLTP (Online Transaction Processing)![ref1]**

- Applications  where  **large  number  of  users  make  large ![ref5]number of small transactions** 
  - small data reads, updates and deletes 
  - **Use cases**: 
    - Most  traditional  applications,  ERP,  CRM,  e-commerce,  banking ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.298.png)applications 
    - **Popular databases**: 
      - MySQL, Oracle, SQL Server etc 
      - Recommended Google Managed Services: 
        - **Cloud  SQL**  :  Supports  PostgreSQL,  MySQL,  and  SQL  Server  for  regional relational databases (upto a few TBs)
        - **Cloud Spanner**: Unlimited scale (multiple PBs) and 99.999% availability for global applications with horizontal scaling

222![ref48]

**Relational Database - OLAP (Online Analytics Processing)![ref1]**

- Applications allowing users to **analyze petabytes of data ![ref102]**
  - **Examples**  :  Reporting  applications,  Data  ware  houses,  Business intelligence applications, Analytics systems 
    - **Sample application** : Decide insurance premiums analyzing data from last hundred years 
      - Data is consolidated from multiple (transactional) databases
  - Recommended GCP Managed Service
    - **BigQuery**: **Petabyte-scale** distributed data ware house

223![ref48]

**Relational Databases - OLAP vs OLTP ![ref1]**

- OLAP and OLTP use **similar data structures ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.300.png)**
  - BUT **very different approach in how data is stored** 
    - **OLTP databases** use row storage 
      - Each table row is stored together 
        - Efficient for processing small transactions 
      - **OLAP databases** use columnar storage 
        - Each table column is stored together 
          - **High compression** - store petabytes of data efficiently ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.301.png)
          - **Distribute data** - one table in multiple cluster nodes 
        - **Execute  single  query  across  multiple  nodes**  - Complex queries can be executed efficiently 


![ref1]

224![ref103]

**NoSQL Databases ![ref1]**

- **New approach** (actually NOT so new!) to building your databases ![ref100]
  - NoSQL = not only SQL 
    - Flexible schema 
      - Structure data **the way your application needs it** 
        - Let the schema evolve with time ![ref101]
  - Horizontally scale to petabytes of data with millions of TPS 
  - **NOT a 100% accurate generalization** but a great starting point: 
    - Typical  NoSQL  databases  trade-off  "Strong  consistency  and  SQL  features"  to achieve "scalability and high-performance"
    - **Google Managed Services**:
      - Cloud Firestore (Datastore)
        - Cloud BigTable

225![ref48]

**Cloud Firestore (Datastore) vs Cloud BigTable ![ref1]**

- **Cloud Datastore** - Managed serverless NoSQL document database ![ref100]
  - Provides ACID transactions, SQL-like queries, indexes 
    - Designed for transactional mobile and web applications 
  - Firestore (next version of Datastore) adds: 
    - Strong consistency ![ref101]
      - Mobile and Web client libraries 
    - Recommended for small to medium databases (0 to a few Terabytes) 
  - **Cloud BigTable** - Managed, scalable NoSQL wide column database 
    - NOT serverless (You need to create instances)
    - Recommend for data size > 10 Terabytes to several Petabytes
      - Recommended for large analytical and operational workloads:
        - NOT  recommended  for  transactional  workloads  (Does  NOT  support  multi  row  transactions  - supports ONLY Single-row transactions)

226![ref48]

**In-memory Databases ![ref1]**

- **Retrieving data from memory is much faster than retrieving ![ref104]data from disk** 
  - In-memory databases like Redis deliver microsecond latency by storing **persistent data in memory** 
    - Recommended GCP Managed Service 
      - **Memory Store**
      - **Use  cases**  :  Caching,  session  management,  gaming  leader boards, geospatial applications

227![ref48]

**Databases - Summary ![ref1]**

**Database Type GCP Services Description![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.304.png)**

**Relational OLTP** Cloud SQL, Cloud Transactional usecases needing **predefined schema** and very **databases** Spanner **strong transactional** capabilities (Row storage)  

**Cloud SQL**: MySQL, PostgreSQL, SQL server DBs  

**Cloud Spanner**: Unlimited scale and 99.999% availability for global applications with horizontal scaling![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.305.png)

**Relational OLAP** BigQuery Columnar storage with predefined schema. Datawarehousing & **databases** BigData workloads![ref105]


**NoSQL Databases**

Cloud Firestore (Datastore) , Cloud BigTable

Apps needing **quickly evolving** structure (**schema-less**) 

**Cloud Firestore** - Serverless transactional document DB supporting mobile & web apps. Small to medium DBs (0 - few TBs) 

**Cloud BigTable** - Large databases(10 TB - PBs). Streaming (IOT), analytical & operational workloads. NOT serverless.


**In memory** Cloud Memorystore Applications needing **microsecond** responses ![ref105]**databases/caches![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.307.png)**


![ref1]

228![ref103]

**Databases - Scenarios ![ref1]**

**Scenario Solution![ref106]**

**A start up with quickly evolving schema (table structure)** Cloud

Datastore/Firestore![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.309.png)

**Non relational db with less storage (10 GB)** Cloud Datastore ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.310.png)**Transactional global database with predefined schema needing to process million of** CloudSpanner

**transactions per second![ref106]**

**Transactional local database processing thousands of transactions per second** Cloud SQL ![ref107]**Cache data (from database) for a web application** MemoryStore ![ref106]**Database for analytics processing of petabytes of data** BigQuery ![ref107]**Database for storing huge volumes stream data from IOT devices** BigTable ![ref106]**Database for storing huge streams of time series data** BigTable![ref107]

229![ref48]

**Cloud SQL ![ref1]**

- **Fully Managed Relational Database** service ![ref5]
  - Configure your needs and do NOT worry about managing the database 
    - Supports MySQL, PostgreSQL, and SQL Server 
      - Regional Service providing High Availability (99.95%) 
        - Use SSDs or HDDs (For best performance: use SSDs) 
        - Upto 416 GB of RAM and 30 TB of data storage
  - **Use Cloud SQL for simple relational use cases**:
    - To migrate local MySQL, PostgreSQL, and SQL Server databases
      - To reduce your maintenance cost for a simple relational database
        - (REMEMBER) Use Cloud Spanner(Expensive $$$$) instead of Cloud SQL if:
          - You have huge volumes of relational data (TBs) OR
            - You need infinite scaling for a growing application (to TBs) OR
              - You need a Global (distributed across multiple regions) Database OR ![ref89] You need higher availability (99.999%)

230![ref48]

**Cloud SQL - Features ![ref1]**

- **Important Cloud SQL Features**: ![ref98]
  - Automatic encryption (tables/backups), maintenance and updates 
    - High availability and failover: 
      - Create a Standby with automatic failover 
        - Pre requisites: Automated backups and Binary logging
  - Read replicas for read workloads:
    - Options: Cross-zone, Cross-region and External (NON Cloud SQL DB)
      - Pre requisites: Automated backups and Binary logging
    - Automatic storage increase without downtime (for newer versions)
    - Point-in-time recovery: Enable binary logging
  - Backups (Automated and on-demand backups)
    - Supports migration from other sources
      - Use Database Migration Service (DMS)
    - You can export data from UI (console) or gcloud with formats: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.312.png) SQL (Recommended if you import data into other databases) and CSV

231![ref48]

**Cloud SQL - High Availability ![ref1]**

- Create a High Availability (HA) Configuration ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.313.jpeg)
  - Choose **Primary and Secondary** zones within a region 
    - You will have two instances : **Primary** and **Secondary** instances 
  - Changes  from  primary  are  replicated **synchronously** to secondary 
    - In case of **Zonal** failure, automatic failover to secondary instance: 
      - If **Primary zone** becomes available, failover does not revert automatically 

(Remember) **High Availability** setup CANNOT ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.314.png)be used as a **Read Replica** source:cloud.google.com

232![ref48]

**Cloud Spanner ![ref1]**

- **Fully  managed,  mission  critical,  relational(SQL),  globally ![ref99]distributed database** with VERY high availability (99.999%) 
  - Strong transactional consistency at **global scale** 
    - **Scales to PBs of data** with automatic sharding 
  - Cloud Spanner **scales horizontally for reads and writes**
    - Configure no of nodes
      - (REMEMBER) In comparison, Cloud SQL provides read replicas: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.315.png) BUT you cannot horizontally scale write operations with Cloud SQL!
    - Regional and Multi-Regional configurations
      - **Expensive** (compared to Cloud SQL): Pay for nodes & storage
        - **Data Export**: Use Cloud Console to export data
          - Other option is to use Data flow to automate export
            - No gcloud export option

233![ref48]

**Cloud Datastore and Firestore ![ref1]**

- **Datastore** - Highly scalable NoSQL Document Database ![ref100]
  - Automatically scales and partitions data as it grows 
    - Recommended for upto a few TBs of data 
      - For bigger volumes, BigTable is recommended 
    - Supports Transactions, Indexes and SQL like queries (GQL)
      - Does NOT support Joins or Aggregate (sum or count) operations
    - For use cases needing flexible schema with transactions
      - Examples: User Profile and Product Catalogs
  - Structure: Kind > Entity (Use namespaces to group entities)
    - You can export data ONLY from gcloud (NOT from cloud console) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.316.png) Export contains a metadata file and a folder with the data
  - **Firestore** = Datastore++ : Optimized for multi device access
    - Offline mode and data synchronization across multiple devices - mobile, IOT etc
      - Provides client side libraries - Web, iOS, Android and more
        - Offers Datastore and Native modes

234![ref48]

**Cloud BigTable ![ref1]**

- **Petabyte scale, wide column** NoSQL DB (HBase API compatible) ![ref108]
  - Designed for huge volumes of analytical and operational data 
    - IOT Streams, Analytics, Time Series Data etc 
  - Handle millions of read/write TPS at very low latency 
    - Single row transactions (multi row transactions NOT supported)
  - **NOT  serverless**:  You  need  to  create  a  server  instance  (Use  SSD  or HDD)
    - Scale horizontally with multiple nodes (No downtime for cluster resizing)
    - **CANNOT export data using cloud console or gcloud**:
      - Either use a Java application (java -jar JAR export\import) OR
        - Use HBase commands
      - Use cbt command line tool to work with BigTable (NOT gcloud)
        - Ex: **cbt createtable my-table**

235![ref48]

**Cloud BigTable - Wide Column Database ![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.318.png)

- At the most basic level, each table is a sorted key/value map
  - Each value in a row is indexed using a key - **row key**
    - Related columns are grouped into column families
      - Each column is identified by using column-family:column-qualifer(or name)
  - This structure supports high read and write throughput at low latency
    - **Advantages** : Scalable to **petabytes of data** with **millisecond responses** upto **millions of TPS**
    - **Use cases** : IOT streams, graph data and real time analytics (time-series data, financial data - transaction histories, stock prices etc)
      - **Cloud Dataflow** : Used to export data from BigTable to CloudStorage
        - For ex: Cloud Bigtable to Cloud Storage Avro, Cloud Bigtable to Cloud Storage Parquet


![ref1]

236![ref103]

**Memorystore ![ref1]**

- **In-memory datastore service**: Reduce access times ![ref104]
  - **Fully  managed**  (Provisioning,  Replication,  Failover  and Patching) 
    - Highly available with 99.9% availability SLA 
      - Monitoring can be easily setup using Cloud Monitoring 
    - Support for **Redis and Memcached**:
      - Use Memcached for Caching
        - Reference data, database query caching, session store etc
      - Use Redis for low latency access with persistence and high availability
        - Gaming Leader Boards, Player Profiles, In memory Stream Processing etc

237![ref48]

**BigQuery - Datawarehouse ![ref1]**

- **Exabyte scale modern Datawarehousing** solution from GCP ![ref102]
  - Relational database (SQL, schema, consistency etc) 
    - Use **SQL-like commands** to query massive datasets 
  - Traditional (Storage + Compute) + Modern (Realtime + Serverless) 
  - When we are talking about a Datawarehouse, **importing and exporting data (and formats) becomes very important**:
    - Load data from a **variety of sources, incl. streaming data**
      - Variety of import formats - CSV/JSON/Avro/Parquet/ORC/Datastore backup
    - Export to Cloud Storage (long term storage) & Data Studio (visualization)
      - Formats - CSV/JSON (with Gzip compression), Avro (with deflate or snappy compression)
    - Automatically expire data (**Configurable Table Expiration**)
      - Query **external data sources** without storing data in BigQuery
        - Cloud Storage, Cloud SQL, BigTable, Google Drive
          - Use **Permanent or Temporary** external tables

238![ref48]

**BigQuery - Accessing and Querying Data ![ref1]**

- **Access databases using**: ![ref102]
  - Cloud Console 
    - bq command-line tool (NOT gcloud) 
      - BigQuery Rest API OR 
        - HBase API based libraries (Java, .NET & Python) 
  - (Remember)  BigQuery  queries  **can  be expensive**  as  you  are running them on large data sets!
    - (BEST PRACTICE) **Estimate BigQuery queries before running**:
      - **1:** Use UI(console)/bq(--dry-run) - Get scanned data volume (estimate)
      - **2:** Use Pricing Calculator: Find price for scanning 1 MB data. Calculate cost.

239![ref48]

**Relational Database - Import and Export ![ref1]**

- **Cloud SQL** : to/from Cloud Storage (**gcloud sql export/import csv/sql**) ![ref98]
  - From Console/gcloud/REST API 
    - SQL and CSV formats 
  - For large databases, use serverless mode 
    - Reduces performance impact of export on the live database ![ref99]
  - **Cloud Spanner**: to/from Cloud Storage 
    - From Console (uses Cloud Data Flow) 
    - **BigQuery**: to/from Cloud Storage and Others (**bq extract/load**) ![ref101]
      - From Console/bq 
        - Formats - CSV/JSON (with Gzip compression), Avro (with deflate or snappy compression) 
      - Variety of options to import data: 
        - Load data from Cloud Storage ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.319.png) Example Use Case: Data Store > Cloud Storage > Big Query ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.320.png) Batch Loading with BigQuery Data Transfer Service ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.321.png) Use Dataflow to setup streaming pipeline

240![ref48]

**NoSQL Databases - Import and Export ![ref1]**

- **Cloud Datastore/Firestore**: to/from Cloud Storage ![ref100]
  - From Console/gcloud/REST API 
    - **gcloud datastore/firestore export/import --kinds --namespaces** 
  - **Cloud BigTable**: to/from Cloud Storage ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.322.png)
    - Create Dataflow jobs 
    - Formats: Avro/Parquet/SequenceFiles 
    - (REMEMBER)  Ensure  that  service  accounts  have  access  to  Cloud Storage Buckets ![ref108]
      - ACL (**gsutil acl ch -U SERVICE\_ACCOUNT :W BUCKET**) OR 
      - Roles **Storage Admin** or **Storage Object Admin** or **Storage Object Creator** 

241![ref48]

**Cloud SQL - CommandLine ![ref1]**

- **gcloud sql ![ref5]**
  - gcloud sql **instances create/clone/delete/describe/patch** 
    - gcloud sql instances **create INSTANCE** 
    - gcloud sql instances **patch --backup-start-time** 
    - gcloud sql **databases create/delete/describe/list/patch** 
      - gcloud sql databases **create DATABASE --instance=INSTANCE**
  - gcloud sql **connect INSTANCE [--database=DATABASE --user=root]**
    - gcloud sql **backups create/describe/list**
      - gcloud sql **backups create** --async --instance [INSTANCE] (one time backup)

242![ref48]

**BigQuery - Command Line ![ref1]**

- BigQuery (**bq**) ![ref101]
  - bq **show** bigquery-public-data:samples.shakespeare 
    - bq **query** 'QUERY-STRING' 
      - **--dry-run** - To estimate the bytes scanned by a query 
      - bq **extract** (export data)
        - bq **load** (load data)
  - (Remember) Use the standard way to set the project
    - gcloud config set project my-project

243![ref48]

**cbt tool - Cloud Bigtable - CommandLine ![ref1]**

- **cbt** - CLI for Cloud Bigtable (NOT gcloud) ![ref108]
  - Installing - gcloud components install cbt 
    - Verify Installation - cbt listinstances 
      - Create **.cbtrc file** with the configuration 
        - echo project = project-id > ~/.cbtrc ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.323.png) echo instance = quickstart-instance >> ~/.cbtrc
      - Commands (**cbt**):
        - cbt **createinstance** - Create an instance
          - cbt **createcluster** - Create a cluster within configured instance!
            - cbt **createtable/deleteinstance/deletecluster/deletetable ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.324.png)** cbt **listinstances/listclusters**
        - cbt **ls** - list tables and column families
  - (Remember) You can **configure your project** with cbt in .cbtrc file

244![ref48]

**Databases - Remember ![ref1]**

- (Remember) BigQuery, Datastore, Firebase does NOT need VM configuration
  - whereas Cloud SQL and BigTable need VM configuration
  - **Relational Databases**
    - Small Local Databases - Cloud SQL
      - Highly scalable global databases - Cloud Spanner
        - Datawarehouse - BigQuery
    - **NoSQL Databases**
      - Transactional database for a few Terabytes of data - Cloud Datastore
      - Huge volumes of IOT or streaming analytics data - Cloud BigTable

245![ref48]

**Decoupling Applications  ![ref1]**

**with Pub/Sub**

246![ref48]

**Need for Asynchronous Communication ![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.325.png) Why do we need asynchronous communication?

247![ref48]

**Synchronous Communication ![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.326.png)

- Applications  on  your  web  server  make  synchronous  calls  to  the  logging service
  - What if your logging service goes down?
    - Will you applications go down too?
    - What if all of sudden, there is high load and there are lot of logs coming in?
      - Log Service is not able to handle the load and goes down very oen

248![ref48]

**Asynchronous Communication - Decoupled ![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.327.png)

- Create a topic and have your applications put log messages on the topic
  - Logging service picks them up for processing when ready
    - Advantages:
      - Decoupling: Publisher (Apps) don't care about who is listening
        - Availability: Publisher (Apps) up even if a subscriber (Logging Service) is down
          - Scalability: Scale consumer instances (Logging Service) under high load
          - Durability: Message is not lost even if subscriber (Logging Service) is down

249![ref48]

**Pub/Sub ![ref1]**

- Reliable,  scalable,  fully-managed  asynchronous ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.328.png)messaging service 
  - Backbone  for  **Highly Available**  and  **Highly Scalable** Solutions 
    - Auto scale to process billions of messages per day
      - Low cost (Pay for use)
    - Usecases: Event ingestion and delivery for streaming analytics pipelines
      - Supports push and pull message deliveries

250![ref48]

**Pub/Sub - How does it work? ![ref1]**

- **Publisher** - Sender of a message ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.329.jpeg)
  - Publishers send messages by making HTTPS requests to pubsub.googleapis.com 
  - **Subscriber** - Receiver of the message 
    - **Pull** - Subscriber pulls messages when ready 
      - Subscriber  makes  HTTPS  requests  to pubsub.googleapis.com 
      - **Push** - Messages are sent to subscribers 
        - Subscribers  provide  a  web  hook  endpoint  at  the time of registration 
          - When a message is received on the topic, A HTTPS POST request is sent to the web hook endpoints
    - **Very  Flexible**  Publisher(s)  and Subscriber(s)  Relationships:  One  to Many, Many to One, Many to Many

251![ref48]

**Pub/Sub - Getting Ready with Topic and Subscriptions ![ref1]**

- Step 1 : Topic is created ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.330.jpeg)
  - Step  2  :  Subscription(s)  are created 
    - Subscribers register to the topic 
      - Each  Subscription  represents discrete  pull  of  messages  from  a topic: 
        - Multiple clients pull same subscription => messages split between clients 
          - Multiple  clients  create  a  subscription each  =>  each  client  will  get  every message 

252![ref48]

**Pub/Sub - Sending and Receiving a Message ![ref1]**

- Publisher sends a message to Topic ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.331.png)
  - Message  **individually**  delivered  to  each  and every subscription 
    - Subscribers can receive message either by: 
      - Push: Pub/Sub sends the message to Subscriber 
        - Pull: Subscribers poll for messages 
    - Subscribers send acknowledgement(s) 
      - Message(s)  are  removed  from  subscriptions message queue
        - Pub/Sub  ensures  the  message  is  retained  **per subscription** until it is acknowledged

253![ref48]

**Managing Pub/Sub ![ref1]**

- Pub/Sub **pubsub ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.332.png)**
  - gcloud pubsub **topics create** my-topic 
    - gcloud pubsub **subscriptions create** my-subscription --topic=my-topic 
      - **--enable-message-ordering** - ordered message delivery 
        - **--ack-deadline** - how long to wait for acknowledgment?
          - **--message-filter** - criteria to filter messages
      - gcloud pubsub **subscriptions pull** my-subscription
        - --auto-ack --limit
        - gcloud pubsub **subscriptions ack** my-subscription --ack-ids=[ACK\_ID,…]
  - Topic: **gcloud pubsub topics ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.333.png)** gcloud pubsub topics **delete** my-topic ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.334.png) gcloud pubsub topics **list ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.335.png)** gcloud pubsub topics **list-subscriptions** my-topic

254![ref48]

**Networking![ref1]**

255![ref48]

**Need for Google Cloud VPC ![ref1]**

- In a corporate network or an on-premises data center: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.336.png)
  - Can anyone on the internet **see the data exchange** between the application and the database? 
    - **No** 
    - Can anyone from internet **directly connect to your database**? 
      - Typically **NO**. 
        - You  need  to  connect  to  your  corporate  network  and  then  access  your applications or databases. 
  - Corporate  network  provides  a  **secure  internal network**  protecting  your  resources,  data  and communication from external users
    - How do you do create **your own private network** in the cloud?
      - Enter **Virtual Private Cloud (VPC)**

256![ref48]

**Google Cloud VPC (Virtual Private Cloud) ![ref1]**

- Your **own isolated network** in GCP cloud ![ref109]
  - Network traffic within a VPC is isolated (not visible) from all other Google Cloud VPCs 
  - You **control all the traffic** coming in and going outside a VPC 
    - **(Best  Practice)**  Create  all  your  GCP  resources  (compute, storage, databases etc) **within a VPC**
      - Secure resources from unauthorized access AND
        - Enable secure communication between your cloud resources
      - VPC is a **global resource** & contains subnets in one or more region
        - (REMEMBER) NOT tied to a region or a zone. VPC resources can be in any region or zone!

257![ref48]

**Need for VPC Subnets ![ref1]**

- Different  types  of  resources  are  created  on  cloud  -  databases, ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.338.png)compute etc 
  - Each type of resource has **its own access needs** 
    - Load Balancers are accessible from internet (**public** resources) 
      - Databases or VM instances should NOT be accessible from internet ![ref75]
        - ONLY applications within your network (VPC) should be able to access them(**private** resources) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.339.png)
  - How do you **separate public resources from private resources** inside a VPC? 
    - Create separate Subnets! 
    - (Additional Reason) You want to distribute resources across multiple ![ref75] regions for high availability![ref14]![ref75]

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.340.png)


![ref1]

258![ref103]

**VPC Subnets ![ref1]**

- (Solution) **Create different subnets** for public ![ref110]and private resources 
  - Resources  in  a  public  subnet  **CAN**  be  accessed  from internet 
    - Resources  in  a  private  subnet  **CANNOT**  be  accessed from internet 
      - BUT resources in public subnet can talk to resources in private subnet 
  - Each Subnet is created in a region 
    - **Example** : VPC - demo-vpc => Subnets - region us-central1, europe-west1 or us-west1 or ..

259![ref48]

**Creating VPCs and Subnets ![ref1]**

- By default, every project has a default VPC ![ref110]
  - You can create YOUR own VPCs: 
    - **OPTION 1**: Auto mode VPC network: 
      - Subnets are automatically created in each region 
        - Default  VPC  created  automatically  in  the  project  uses  auto mode! 
      - **OPTION 2**: Custom mode VPC network: 
        - No subnets are automatically created 
          - You have complete control over subnets and their IP ranges ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.342.png) Recommended for Production
    - Options when you create a subnet:
      - Enable **Private Google Access** - Allows VM's to connect to Google API's using private IP's
        - Enable  **FlowLogs**  -  To  troubleshoot  any  VPC  related network issues

260![ref48]

**CIDR (Classless Inter-Domain Routing) Blocks ![ref1]**

- Resources in a network use continuous IP addresses to make routing easy:
  - Example:  Resources  inside  a  specific  network  can  use  IP  addresses  from  69.208.0.0  to 69.208.0.15
  - How do you express a **range of addresses** that resources in a network can have?
    - **CIDR block**
    - A **CIDR block** consists of a **starting IP address(69.208.0.0)** and a **range(/28)**
      - Example: CIDR block 69.208.0.0/28 represents addresses from 69.208.0.0 to 69.208.0.15 - a total of 16 addresses
      - **Quick Tip**: 69.208.0.0/28 indicates that the first 28 bits (out of 32) are fixed.
        - Last 4 bits can change => 2 to the power 4 = 16 addresses

261![ref48]

**CIDR Exercises ![ref1]**

![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.343.png)

- Exercise : How many addresses does **69.208.0.0/26** represent?
  - 2 to the power (32-26 = 6) = 64 addresses from 69.208.0.0 to 69.208.0.63
  - Exercise : How many addresses does **69.208.0.0/30** represent?
    - 2 to the power (32-30 = 2) = 4 addresses from 69.208.0.0 to 69.208.0.3
    - Exercise : What is the difference between **0.0.0.0/0** and **0.0.0.0/32**?
      - 0.0.0.0/0 represent all IP addresses. 0.0.0.0/32 represents just one IP address 0.0.0.0.

262![ref48]

**Examples of Recommended CIDR Blocks - VPC Subnets ![ref1]**

- **Recommended CIDR Blocks ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.344.png)**
  - Private IP addresses RFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 
    - Shared address space RFC 6598: 100.64.0.0/10 
      - IETF protocol assignments RFC 6890: 192.0.0.0/24 
  - **Restricted Range Examples**
    - You CANNOT use these as CIDR for VPC Subnets
      - Private Google Access-specific virtual IP addresses: 199.36.153.4/30, 199.36.153.8/30
        - Current (local) network RFC 1122: 0.0.0.0/8 ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.345.png) Local host RFC 1122: 127.0.0.0/8
    - (REMEMBER)  You  **CAN  EXTEND**  the  CIDR  Block  Range  of  a  Subnet (Secondary CIDR Block)

263![ref48]

**Firewall Rules ![ref1]**

- Configure Firewall Rules to control traffic going in or out of the ![ref109]network: 
  - Stateful 
    - Each firewall rule has priority (0-65535) assigned to it 
      - 0 has highest priority. 65535 has least priority 
        - Default implied rule with lowest priority (65535)
          - Allow all egress
            - Deny all ingress
              - Default rules can't be deleted
                - You can override default rules by defining new rules with priority 0-65534
        - Default VPC has 4 additional rules with priority 65534 ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.346.png) Allow incoming traffic from VM instances in same network (**default-allow-internal**) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.347.png) Allow Incoming TCP traffic on port 22 (SSH) **default-allow-ssh ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.348.png)** Allow Incoming TCP traffic on port 3389 (RDP) **default-allow-rdp ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.349.png)** Allow Incoming ICMP from any source on the network **default-allow-icmp**

264![ref48]

**Firewall Rules - Ingress and Egress Rules ![ref1]**

- **Ingress Rules**: Incoming traffic from outside to GCP targets ![ref109]
  - **Target (defines the destination)**: All instances or instances with TAG/SA 
    - **Source (defines where the traffic is coming from)**: CIDR or All instances or instances with TAG/SA 
  - **Egress Rules**: Outgoing traffic to destination from GCP targets 
    - **Target (defines the source)**: All instances or instances with TAG/SA
    - **Destination**: CIDR Block
    - **Along with each rule**, you can also define:
      - **Priority** - Lower the number, higher the priority
        - **Action on match** - Allow or Deny traffic
          - **Protocol** - ex. TCP or UDP or ICMP
          - **Port** - Which port?
          - **Enforcement status** - Enable or Disable the rule

265![ref48]

**Shared VPC ![ref1]**

- Scenario:  Your  organization  has  multiple  projects.  You  want ![ref109]resources in different projects to talk to each other? 
  - How  to  allow  resources  in  different  projects  to  talk  with  internal  IPs securely and efficiently? 
  - Enter **Shared VPC** 
    - Created at organization or shared folder level (Access Needed: Shared VPC Admin)
      - Allows VPC network to be shared between projects in same organization
    - Shared VPC contains one host project and multiple service projects:
      - **Host Project** - Contains shared VPC network
        - **Service Projects** - Attached to host projects
    - Helps you achieve **separation of concerns**:
      - Network administrators responsible for Host projects and Resource users use Service Project

266![ref48]

**VPC Peering ![ref1]**

- Scenario:  How  to  connect  VPC  networks  across  different ![ref109]organizations? 
  - Enter **VPC Peering** 
    - Networks  in  same  project,  different  projects  and  across  projects  in different organizations can be peered 
      - All communication happens using internal IP addresses
        - Highly efficient because all communication happens **inside Google network**
          - Highly secure because **not accessible from Internet**
            - **No data transfer charges** for data transfer between services
    - (REMEMBER) Network administration is NOT changed:
      - Admin of one VPC do not get the role automatically in a peered network

267![ref48]

**Hybrid Cloud![ref1]**

268![ref48]

**Cloud VPN ![ref1]**

- Cloud VPN - Connect on-premise network to the GCP network ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.350.png)
  - Implemented using **IPSec VPN Tunnel** 
    - Traffic through internet (public) 
      - Traffic encrypted using **Internet Key Exchange** protocol 
  - Two types of Cloud VPN solutions:
    - HA VPN (SLA of 99.99% service availability with two external IP addresses)
      - Only dynamic routing (BGP) supported
    - Classic VPN (SLA of 99.9% service availability, a single external IP address)
      - Supports Static routing (policy-based, route-based) and dynamic routing using BGP

269![ref48]

**Cloud Interconnect ![ref1]**

- High  speed  physical  connection  between  on-premise  and  VPC ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.351.png)networks: 
  - Highly available and high throughput 
    - Two types of connections possible 
      - Dedicated Interconnect - 10 Gbps or 100 Gpbs configurations
        - Partner Interconnect - 50 Mbps to 10 Gbps configurations
  - Data exchange happens through a private network:
    - Communicate using VPC network's internal IP addresses from on-premise network
      - Reduces egress costs
        - As public internet is NOT used
    - (Feature)  Supported  Google  API's  and  services  can  be  privately accessed from on-premise
      - Use only for high bandwidth needs:
        - For low bandwidth, Cloud VPN is recommended

270![ref48]

**Direct Peering ![ref1]**

- Connect customer network to google network using network peering
  - Direct path from on-premises network to Google services
  - **Not a GCP Service**
    - Lower level network connection outside of GCP
    - NOT RECOMMENDED:
      - Use Cloud Interconnect and Cloud VPN

271![ref48]

**Cloud Operations![ref1]**

272![ref48]

**Cloud Monitoring ![ref1]**

- To operate cloud applications effectively, you should know: ![ref111]
  - Is my application healthy? 
    - Are the users experiencing any issues? 
      - Does my database has enough space? 
        - Are my servers running in an optimum capacity? 
  - **Cloud Monitoring** - Tools to monitor your infrastructure
    - Measures key aspects of services (Metrics)
    - Create visualizations (Graphs and Dashboard)
      - Configure Alerts (when metrics are NOT healthy)
        - Define Alerting Policies:
          - Condition
            - Notifications - Multiple channels ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.353.png) Documentation

273![ref48]

**Cloud Monitoring - Workspace ![ref1]**

- You  can  use  Cloud  Monitoring  to  monitor  one  or  more  GCP ![ref111]projects and one or more AWS accounts 
  - How  do  you  group  all  the  information  from  multiple  GCP projects or AWS Accounts? 
    - **Create a Workspace**
      - Workspaces are needed to organize monitoring information
        - A  workspace  allows  you  to  see  monitoring  information  from  multiple projects
          - Step I: Create workspace in a specific project (Host Project)
            - Step II: Add other GCP projects (or AWS accounts) to the workspace

274![ref48]

**Cloud Monitoring - Virtual Machines ![ref1]**

![ref64] ![ref15] ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.354.png)

- **Default metrics monitored** include:
  - CPU utilization
    - Some disk traffic metrics
      - Network traffic, and
      - Uptime information
  - Install **Cloud Monitoring agent** on the VM to get more disk, CPU, network, and process metrics:
    - collectd-based daemon
    - Gathers metrics from VM and sends them to Cloud Monitoring

275![ref48]

**Cloud Logging ![ref1]**

- Real time log management and analysis tool ![ref112]
  - Allows to store, search, analyze and alert on massive volume of data 
    - Exabyte scale, fully managed service 
      - No server provisioning, patching etc
      - Ingest Log data from any source
        - Key Features:
          - Logs Explorer - Search, sort & analyze using flexible queries
            - Logs Dashboard - Rich visualization
              - Logs Metrics - Capture metrics from logs (using queries/matching strings)
              - Logs Router - Route different log entries to different destinations

276![ref48]

**Cloud Logging - Collection ![ref1]**

![ref64] ![ref15] ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.356.png)

- Most **GCP Managed services automatically send logs** to Cloud Logging:
  - GKE
    - App Engine
      - Cloud Run
  - Ingest logs from GCE VMs:
    - Install **Logging Agent** (based on fluentd)
      - (Recommended) Run Logging Agent on all VM instances
    - Ingest logs from on-premises:
      - (Recommended) Use the BindPlane tool from Blue Medora
        - Use the Cloud Logging API

277![ref48]

**Cloud Logging - Audit and Security Logs ![ref1]**

- **Access Transparency Log**: Captures Actions performed by GCP ![ref112]team on your content (NOT supported by all services): 
  - ONLY for organizations with Gold support level & above 
  - **Cloud Audit Logs**: Answers who did what, when and where: 
    - Admin activity Logs 
      - Data Access Logs
        - System Event Audit Logs
        - Policy Denied Audit Logs

278![ref48]

**Cloud Logging - Audit Logs ![ref1]**

- Which service? ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.357.jpeg)
  - **protoPayload.serviceName** 
  - Which operation? 
    - **protoPayload.methodName** 
    - What resource is audited? 
      - **resource.Type** 
      - Who is making the call? 
        - **authenticationInfo.principalEmail** 

279![ref48]

**Cloud Audit Logs ![ref1]**

**Feature Admin Activity Logs Data Access System Event Logs Policy Denied**

**Logs Logs![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.358.png)**

**Logs for** API calls or other actions Reading Google Cloud When user or

that modify the configuration of administrative actions service account configuration of resources is denied access resources![ref113]

**Default** ✓ X ✓ ✓ **Enabled![ref114]**

**VM Examples** VM Creation, Patching Listing resources On host maintenance, Security policy

resources, Change in IAM (vms, images Instance preemption, violation logs permissions etc) Automatic restart![ref113]

**Cloud Storage** Modify bucket or object Modify/Read

bucket or object![ref114]

280![ref48]![ref113]

**Recommended Roles**

Logging/Logs Viewer or Logging/Private Project/Viewer Logs Viewer or

Project/Owner

Logging/Logs Viewer or Project/Viewer

Logging/Logs Viewer or Project/Viewer

280![ref48]![ref113]

**Cloud Logging - Controlling & Routing ![ref1]**

- How do you manage your logs? ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.361.jpeg)
  - Logs from various sources reaches **Log Router** 
    - Log Router checks against configured rules 
      - What to ingest? what to discard? 
        - Where to route? 
  - Two types of Logs buckets: 
    - **\_Required**:  Holds  Admin  activity,  System  Events  & Access Transparency Logs (retained for 400 days) 
      - ZERO charge 
        - You cannot delete the bucket ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.362.png) You cannot change retention period 
      - **\_Default**: All other logs (retained for 30 days) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.363.png) You are billed based on Cloud Logging pricing ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.364.png) You cannot delete the bucket: source: ([**https://cloud.google.com**](https://cloud.google.com/)) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.365.png)But you can disable the **\_Default** log sink route to disable ingestion! ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.366.png) You can edit retention settings (1 to 3650 days (10 years))

281![ref48]

**Cloud Logging - Export ![ref1]**

- Logs are ideally stored in Cloud Logging for limited period ![ref112]
  - For long term retention (Compliance, Audit) logs can be exported to: 
    - Cloud Storage bucket (ex: bucket/syslog/2025/05/05) 
      - Big  Query  dataset  (ex:  tables  syslog\_20250505  >  columns  timestamp, log) 
        - Cloud Pub/Sub topic (base64 encoded log entries)
  - How do you export logs?
    - Create **sinks** to these destinations using Log Router:
      - You can create **include** or **exclude** filters to limit the logs

282![ref48]

**Cloud Logging - Export - Use Cases ![ref1]**

- Use Case 1: Troubleshoot using VM Logs:
  - Install Cloud logging agent in all VM's and send logs to Cloud Logging
    - Search for logs in Cloud Logging
  - Use Case 2: Export VM logs to BigQuery for querying using SQL like queries:
    - Install Cloud logging agent in all VM's and send logs to Cloud Logging
      - Create a BigQuery dataset for storing the logs
      - Create an export sink in Cloud Logging with BigQuery dataset as sink destination
    - Use Case 3: You want to retain audit logs for external auditors at minimum cost
      - Create an export sink in Cloud Logging with Cloud Storage bucket as sink destination
        - Provide auditors with Storage Object Viewer role on the bucket
          - You can use Google Data Studio also (for visualization)

283![ref48]

**Cloud Trace ![ref1]**

- Distributed tracing system for GCP: Collect latency data from: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.367.png)
  - Supported Google Cloud Services 
    - Instrumented applications (using tracing libraries) using **Cloud Trace API** 
  - Find out: 
    - How long does a service take to handle requests? 
      - What is the average latency of requests?
      - How are we doing over time? (increasing/decreasing trend)
    - Supported for:
      - **Compute Engine, GKE, App Engine (Flexible/Standard)** etc
      - Trace client libraries available for:
        - **C#, Go, Java, Node.js, PHP, Python & Ruby**

284![ref48]

**Cloud Debugger ![ref1]**

- How  to  debug  issues  that  are  happening  only  in  test  or ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.368.png)production environments? 
  - **Cloud Debugger**: Capture state of a running application 
    - Inspect the state of the application directly in the GCP environment 
      - Take snapshots of variables and call stack
        - No need to add logging statements
          - No need to redeploy
          - Very lightweight => Very little impact to users
            - Can be used in any environment: Test, Acceptance, Production

285![ref48]

**Cloud Profiler ![ref1]**

- How do you identify performance bottlenecks in production? ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.369.png)
  - **Cloud Profiler** - Statistical, low-overhead profiler 
    - Continuously gathers CPU and Memory usage from production systems 
      - Connect profiling data with application source code 
        - Easily identify performance bottlenecks 
      - Two major components:
        - Profiling agent (collects profiling information)
          - Profiler interface (visualization)

286![ref48]

**Error Reporting ![ref1]**

- How do you identify production problems in real time? ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.370.png)
  - Real-time exception monitoring: 
    - Aggregates and displays errors reported from cloud services (using stack traces) 
      - **Centralized Error Management console**: 
        - Identify & manage top errors or recent errors
      - Use  **Firebase  Crash  Reporting**  for  errors  from  Android  &  iOS  client applications
        - Supported for Go, Java, .NET, Node.js, PHP, Python, and Ruby
    - Errors can be reported by:
      - Sending them to Cloud Logging OR
        - By calling Error Reporting API
      - Error Reporting can be accessed from desktop
        - Also available in the Cloud Console mobile app for iOS and Android

287![ref48]

**Cloud Operations Scenarios ![ref1]**

**Scenario Solution![ref115]**

**You would like to record all operations/requests on all objects in a** Turn on data access audit logging for **bucket (for auditing)** the bucket![ref116]

**You want to trace a request across multiple microservices** Cloud Trace ![ref117]**You want to identify prominent exceptions (or errors) for a specific** Error Reporting

**microservice![ref115]**

**You want to debug a problem in production by executing step by** Cloud Debugger **step![ref116]**

**You want to look at the logs for a specific request** Cloud Logging![ref117]

288![ref48]

**Organizing GCP Resources![ref1]**

289![ref48]

**Resource Hierarchy in GCP ![ref1]**

- **Well defined hierarchy**: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.374.jpeg)
  - Organization  >  Folder  >  Project  > Resources 
  - **Resources**  are  created  in projects 
    - A **Folder** can contain multiple projects 
      - **Organization**  can  contain multiple Folders 

source: ([**https://cloud.google.com**](https://cloud.google.com/))

290![ref48]

**Resource Hierarchy - Recommendations for Enterprises ![ref1]**

- Create **separate projects for different environments**:
  - Complete isolation between test and production environments
  - Create **separate folders for each department**:
    - Isolate production applications of one department from another
      - We can create a shared folder for shared resources
    - **One project per application per environment**:
      - Let's consider two apps: "A1" and "A2"
      - Let's assume we need two environments: "DEV" and "PROD"
      - In the ideal world you will create four projects: A1-DEV, A1-PROD, A2-DEV, A2-PROD:
        - Isolates environments from each other
          - DEV changes will NOT break PROD ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.375.png) Grant all developers complete access (create, delete, deploy) to DEV Projects ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.376.png) Provide production access to operations teams only!

291![ref48]

**Billing Accounts ![ref1]**

- **Billing Account** is mandatory for creating resources in a project:
  - Billing Account contains the payment details
    - Every Project with active resources should be associated with a Billing Account
  - Billing Account can be associated with one or more projects
    - You can have multiple billing accounts in an Organization
      - (RECOMMENDATION) Create Billing Accounts representing your organization structure:
        - A startup can have just one Billing account
          - A large enterprise can have a separate billing account for each department
        - Two Types:
          - **Self Serve** : Billed directly to Credit Card or Bank Account
          - **Invoiced** : Generate invoices (Used by large enterprises)

292![ref48]

**Managing Billing - Budget, Alerts and Exports ![ref1]**

- Setup a **Cloud Billing Budget** to avoid surprises:
  - (RECOMMENDED) Configure **Alerts**
    - Default alert thresholds set at 50%, 90% & 100%
      - Send alerts to Pub Sub (Optional)
        - Billing admins and Billing Account users are alerted by e-mail
  - Billing data can be **exported (on a schedule)** to:
    - **Big Query** (if you want to query information or visualize it)
      - **Cloud Storage** (for history/archiving)

293![ref48]

**IAM Best Practices ![ref1]**

- **Principle of Least Privilege** - Give least possible privilege needed for a role!
  - Basic Roles are NOT recommended
    - Prefer predefined roles when possible
  - Use Service Accounts with minimum privileges
    - Use different Service Accounts for different apps/purposes
- **Separation of Duties** - Involve atleast 2 people in sensitive tasks:
  - Example: Have separate deployer and traffic migrator roles
    - AppEngine provides App Engine Deployer and App Engine Service Admin roles
      - App Engine Deployer can deploy new version but cannot shi traffic
        - App Engine Service Admin can shi traffic but cannot deploy new version!
  - **Constant  Monitoring**:  Review  Cloud  Audit  Logs  to  audit  changes  to  IAM policies and access to Service Account keys
    - Archive Cloud Audit Logs in Cloud Storage buckets for long term retention
    - Use Groups when possible
      - Makes it easy to manage users and permissions

294![ref48]

**User Identity Management in Google Cloud ![ref1]**

- Email used to create free trial account => **"Super Admin" ![ref87]**
  - Access to everything in your GCP organization, folders and projects 
    - Manage access to other users **using their Gmail accounts** 
  - However, this is **NOT recommended** for enterprises 
    - **Option 1**: Your Enterprise is using **Google Workspace**
      - Use Google Workspace to manage users (groups etc)
        - Link Google Cloud Organization with Google Workspace
      - **Option 2**: Your Enterprise uses an Identity Provider of its own
        - **Federate** Google Cloud with your Identity Provider

295![ref48]

**Corporate Directory Federation ![ref1]**

- **Federate**  Cloud  Identity  or  Google  Workspace  **with  your ![ref87]external identity  provider (IdP)**  such  as  Active  Directory  or Azure Active Directory. 
  - **Enable Single Sign On**: 
    - 1: Users are redirected to an external IdP to authenticate
      - 2: When users are authenticated, SAML assertion is sent to Google Sign-In
    - **Examples**:
      - Federate  Active  Directory  with  Cloud  Identity  by  using  Google  Cloud Directory Sync (GCDS) and Active Directory Federation Services (AD FS)
        - Federating Azure AD with Cloud Identity

296![ref48]

**IAM Members/Identities ![ref1]**

- **Google Account** - Represents a person (an email address) ![ref88]
  - **Service account** - Represents an application account (Not person) 
    - **Google group** - Collection - Google & Service Accounts 
      - Has an unique email address 
        - Helps to apply access policy to a group
      - **Google  Workspace  domain**:  Google  Workspace  (formerly  G  Suite) provides collaboration services for enterprises:
        - Tools like Gmail, Calendar, Meet, Chat, Drive, Docs etc are included
          - If your enterprise is using Google Workspace, you can manage permissions using your Google Workspace domain
        - **Cloud Identity domain**  -  Cloud  Identity  is  an  Identity  as  a  Service (IDaaS) solution that centrally manages users and groups.
          - You can use IAM to manage access to resources for each Cloud Identity account

297![ref48]

**IAM Members/Identities - Use Cases ![ref1]**

**Scenario Solution![ref118]**

298![ref48]![ref119]

**All members in your team have G Suite accounts. You are creating a new production project and would want to provide access to your operations team![ref119]**

Create a Group with all your operations team. Provide access to production project to the Group.

298![ref48]![ref119]

**All members in your team have G Suite accounts. You are setting up a new project. You want to provide a one time quick access to a team member.![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.379.png)**

Assign the necessary role directly to G Suite email address of your team member  

If it is not a one time quick access, the recommended approach would be to create a Group

298![ref48]![ref119]

**You want to provide an external auditor access to view all resources in your project BUT he should NOT be able to make any changes![ref118]**

Give them roles/viewer role (Generally basic roles are NOT recommended BUT it is the simplest way to provide view only access to all resources!)

298![ref48]![ref119]

**Your application deployed on a GCE VM (Project A) needs to access cloud storage bucket from a different project (Project B)**

In Project B, assign the right role to GCE VM service account from Project A

298![ref48]![ref119]

**Organization Policy Service ![ref1]**

- How  to  enable  **centralized  constraints**  on  all  resources ![ref87]created in an Organization? 
  - Configure **Organization Policy** 
    - Example: Disable creation of Service Accounts 
      - Example: Allow/Deny creation of resources in specific regions 
  - Needs a Role - Organization Policy Administrator
    - (Remember) **IAM** focuses on **Who**
      - Who can take specific actions on resources?
      - (Remember) Organization Policy focuses on **What**
        - What can be done on specific resources?

299![ref48]

**Resource Hierarchy & IAM Policy ![ref1]**

- IAM Policy  can  be  set  at  any  level of ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.380.jpeg)the hierarchy 
  - Resources  inherit  the  policies  of  **All parents** 
    - The  effective  policy  for  a  resource  is the  union  of  the  policy  on  that resource and its parents 
      - Policy inheritance is transitive: 
        - For  example:  Organization  policies  are applied at resource level 
        - You can't restrict policy at lower level if  permission  is  given  at  an  higher level

300![ref48]

**Organization, Billing and Project Roles ![ref1]**

- **Organization Administrator**
  - Define Resource Hierarchy
    - Define Access Management Policies
      - Manage other users and roles
  - **Billing Account Creator** - Create Billing Accounts
    - **Billing  Account  Administrator**  -  Manage  Billing  Accounts  (payment instruments, billing exports, link and unlink projects, manage roles on billing account)
      - CANNOT create a Billing Account
      - **Billing Account User** - Associate Projects with Billing Accounts
        - Typically used in combination with **Project Creator**
        - These two roles allow user to create new project and link it with billing account
        - **Billing Account Viewer** - See all Billing Account details

301![ref48]

**Billing Roles - Quick Review ![ref1]**

**Roles Description Use Case Billing Account Creator![ref120]** Permissions to create new billing accounts Finance Team ![ref121]**Billing Account Administrator** Manages billing account but can't create them Finance Team ![ref120]**Billing Account User** Assigns projects to billing accounts Project Owner ![ref121]**Billing Account Viewer** View only access to billing account Auditor![ref120]

302![ref48]

**Organization, Billing and Project Roles - Scenarios ![ref1]**

- **Scenario 1**: I'm creating a project and I want to associate an existing billing account with the project
  - Roles needed : Project Creator and Billing Account User (link project to billing account)
  - **Scenario 2**: I'm a billing auditor
    - Roles needed : Billing Account Viewer role

303![ref48]

**Compute Engine Roles ![ref1]**

- Compute Engine IAM Roles
  - **Compute Engine Admin** - Complete control of compute - Instances, Images, Load Balancers, Network, Firewalls etc...
    - **Compute Instance Admin** - Create, modify, and delete virtual machine instances and disks
      - **Compute  Engine  Network  Admin**  -  Complete  access  to  networking  resources  (routes, networks, health checks, VPN, Gateways etc) and READ ONLY access to (firewall rules and SSL certificates)
        - **Compute Engine Security Admin** - Complete access to firewall rules and SSL certificates
    - **Compute Storage Admin** - Complete access to disks, images, snapshots
      - **Compute Engine Viewer** - Read ONLY access to everything in compute
      - **Compute OS Admin Login** - Log in to a Compute Engine instance as an administrator user
  - **Compute OS Login** - Log in to a Compute Engine instance as a standard user

304![ref48]

**App Engine Roles ![ref1]**

- App Engine Roles (CRUD - Create, Read (get/list), Update, Delete)
  - **App Engine Creator** - applications(CD) (Responsible for creating an application)
    - **App Engine Admin** - applications(RU), services/instances/versions(CRUD), operations
      - **App Engine Viewer** - applications/services/instances/versions(R), operations
        - **App Engine Code Viewer** - appengine.versions.getFileContents (ONLY role that can view code)
        - **App Engine Deployer** - versions(CRD), applications/services/versions(R)
          - Deploy a new version of an app (if you also grant the Service Account User role)
        - **App  Engine  Service  Admin**  -  versions(RUD),  applications(R),  services/instances(CRUD), operations: Split or migrate traffic, Start and stop a version
  - App Engine Roles DO NOT allow you to
    - View and download application logs
      - View Monitoring charts in the Cloud Console
      - Enable and Disable billing
        - Access configuration or data stored in other services

305![ref48]

**Compute Engine and App Engine Roles - Few Scenarios ![ref1]**

- **Scenario  1**:  What  is  the  difference  between  Compute  Engine  Admin  vs Compute Instance Admin?
  - Compute Instance Admin can do everything with instances and disks ONLY. Compute Engine Admin is admin for everything in compute - instances, disks, images, network, firewalls etc.
  - **Scenario 2**: What is a secure way of setting up application deployment?
    - **Application Deployer** - Roles: App Engine Deployer + Service Account User
      - Limited to deploying new versions and deleting old versions that are not serving traffic
        - Will NOT be able to configure traffic
      - **Operations** - Role: **App Engine Service Admin**
        - CANNOT deploy a new version of an app
          - Change traffic between versions

306![ref48]

**Google Kubernetes Engine (GKE) IAM Roles ![ref1]**

- **Kubernetes  Engine  Admin  (roles/container.admin)**  -  Complete  Access  to Clusters and Kubernetes API objects
  - **Kubernetes  Engine  Cluster  Admin**  -  Provides  access  to  management  of clusters (Cannot access Kubernetes API objects - Deployments, Pods etc)
    - **Kubernetes Engine Developer**  -  Manage  Kubernetes  API  objects  (and  read cluster info)
      - **Kubernetes Engine Viewer** - get/list cluster and kubernetes api objects

307![ref48]

**Cloud Storage - Roles ![ref1]**

- **Storage Admin** - storage.buckets.\*, storage.objects.\*
  - **Storage  Object  Admin**  -  storage.objects.\*  (DOES  NOT  HAVE storage.buckets.\*)
    - **Storage Object Creator** - storage.objects.create
      - **Storage Object Viewer** - storage.objects.get, storage.objects.list
        - (REMEMBER)  Container  Registry  stores  container  images  in  Cloud  Storage buckets
          - Control access to images in Container Registry using Cloud Storage permissions!
          - (REMEMBER) **Storage Admin** vs **Storage Object Admin**
            - Storage Admin can create buckets and play with objects
              - Storage Object Admin CANNOT create buckets but can play with objects in a bucket!

308![ref48]

**Cloud BigQuery Roles ![ref1]**

- Cloud BigQuery IAM Roles
  - **BigQuery Admin** - bigquery.\*
    - **BigQuery  Data  Owner**  -  bigquery.datasets.\*,  bigquery.models.\*,  bigquery.routines.\*, bigquery.tables.\* (**Does NOT have access to Jobs!**)
      - **BigQuery  Data  Editor**  -  bigquery.tables.(create/delete/export/get/getData/getIamPolicy/ list/update/updateData/updateTag),  bigquery.models.\*,  bigquery.routines.\*, bigquery.datasets.(create/get/getIamPolicy/updateTag)
    - **BigQuery Data Viewer** - get/list bigquery.(datasets/models/routines/tables)
      - **BigQuery Job User** - bigquery.jobs.create
      - **BigQuery User** - BigQuery Data Viewer + get/list (jobs, capacityCommitments, reservations etc)
  - To see data, you need either BigQuery User or BigQuery Data Viewer roles
    - You CANNOT see data with BigQuery Job User roles
    - BigQuery Data Owner or Data Viewer roles do NOT have access to jobs!

309![ref48]

**Logging IAM Roles and Service Account Roles ![ref1]**

- Logging and Audit Logging:
  - **roles/logging.viewer (Logs Viewer)**: Read all Logs except Access Transparency logs and Data Access audit logs.
    - **roles/logging.privateLogViewer  (Private  Logs  Viewer)**:  Logs  Viewer  +  Read  Access Transparency logs and Data Access audit logs
      - **roles/logging.admin (Logging Admin)**: All permissions related to Logging
  - Service Accounts:
    - **roles/iam.serviceAccountAdmin**: Create and manage service accounts
      - **roles/iam.serviceAccountUser**: Run operations as the service account
        - roles/iam.serviceAccountUser  =>  create  and  manage  instances  that  use  a  service  account.  This  needs  to  be added to Admin roles if you want them to attach service accounts with instances.
    - **roles/iam.serviceAccountTokenCreator**  -  Impersonate  service  accounts  (create  OAuth2 access tokens, sign blobs or JWTs, etc).
      - **roles/iam.serviceAccountKeyAdmin** - Create and manage (and rotate) service account keys.

310![ref48]

**Other Important IAM Roles ![ref1]**

- **roles/iam.securityAdmin** - Get and set any IAM policy
  - **roles/iam.securityReviewer** - List all resources & IAM policies
    - **roles/iam.organizationRoleAdmin**  -  Administer  all  custom  roles  **in  the organization and the projects below it**
      - **roles/iam.organizationRoleViewer**  -  Read  all  custom  roles  **in  the organization and the projects below it**
        - **roles/iam.roleAdmin** - Provides access to all custom roles **in the project**
          - **roles/iam.roleViewer** - Provides read access to all custom roles **in the project**
            - **roles/browser** - Read access to browse the hierarchy for a project, including the folder, organization, and IAM policy
              - This role doesn't include permission to view resources in the project

311![ref52]

**SSHing into Linux VMs - Options ![ref1]**

- **Compute Engine Linux VMs** uses **key-based SSH** authentication ![ref14]
  - **Two Options**: 
    - **Metadata managed**: Manually create and configure individual SSH keys 
      - **OS Login**: Manage SSH access without managing **individual** SSH keys! 
        - Recommended for managing multiple users across instances or projects
          - Your Linux user account is linked to your Google identity
            - To enable: Set enable-oslogin to true in metadata ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.383.png) gcloud compute **project-info/instances add-metadata --metadata enable-oslogin=TRUE**
              - (Advantage) Ability to import existing Linux accounts from on premises AD and LDAP ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.384.png) Users need to have roles : roles/compute.osLogin or roles/compute.osAdminLogin
    - (Windows)  **Windows**  instances  use  **password** authentication(username and password)
      - Generate using console or gcloud (gcloud compute reset-windows-password)

312![ref48]

**SSHing into Linux VMs - Details ![ref1]**

- **Option 1**: Console - SSH Button ![ref14]
  - Ephemeral SSH key pair is created by Compute Engine 
  - **Option 2**: Gcloud - gcloud compute ssh 
    - A username and persistent SSH key pair are created by Compute Engine 
      - SSH key pair reused for future interactions
    - **Option 3**: Use customized SSH keys
      - (Metadata managed): Upload the public key to project metadata OR
      - (OS Login): Upload your public SSH key to your OS Login profile
        - gcloud compute os-login ssh-keys add OR ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.385.png) Use OS Login API : POST [**https://oslogin.googleapis.com/v1/users/ACCOUNT_EMAIL:importSshPublicKey**](https://oslogin.googleapis.com/v1/users/ACCOUNT_EMAIL:importSshPublicKey)
      - You can disable Project wide SSH keys on a specific compute instance
        - gcloud  compute  **instances  add-metadata  [INSTANCE\_NAME]  --metadata  block- project-ssh-keys=TRUE**

313![ref48]

**IAM - Scenarios ![ref1]**

**Scenario Description You want to give permanent access to a sub set![ref122]** Use ACLs

**of objects in a Cloud Storage bucket![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.387.png)**

**You want to give permanent access to the entire** Use IAM

**bucket in a Cloud Storage bucket![ref123]**

**You want to provide time limited access to a** Create a Signed URL **specific object in a Cloud Storage bucket![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.389.png)**

**You want to give access to a set of resources to** Create a Group with your development team as member. **your development team** Bind the right Predefined Roles to your Group.![ref122]

**Which Role? Upload objects to Cloud Storage** Storage Object Creator ![ref123]**Which Role? Manage Kubernetes API objects** Kubernetes Engine Developer ![ref122]**Which Role? Manage service accounts** Service Account Admin ![ref123]**Which Role? View Data in BigQuery** BigQuery Data Viewer![ref122]

314![ref48]

**Other Google Cloud Platform Services![ref1]**

315![ref48]

**Pricing Calculator ![ref1]**

- **Estimating** the cost of a Google Cloud solution **is NOT easy**
  - You would need to take a **number of factors** into account
    - How do you estimate the cost of your GCP solution?
      - Use **Google Cloud Pricing Calculator**
      - Estimates for **40+ Services**:
        - Compute Engine
          - Google Kubernetes Engine
            - Cloud Run
            - App Engine
        - Cloud Storage
          - etc
        - (REMEMBER) **These are Estimates! (NOT binding on GCP)**

316![ref48]

**Google Cloud Deployment Manager - Introduction ![ref1]**

- Lets consider an example: ![ref124]
  - I would want to create a new VPC and a subnet 
    - I  want  to  provision  a  Load  balancer,  Instance  groups  with  5  Compute Engine instances and an Cloud SQL database in the subnet 
      - I would want to setup the right Firewall 
  - AND I would want to create 4 environments
    - Dev, QA, Stage and Production!
    - Deployment Manager can help you do all these with a simple (actually NOT so simple) script!

317![ref48]

**Google Cloud Deployment Manager - Advantages ![ref1]**

- Automate  deployment  and  modification  of  Google  Cloud ![ref124]resources in a controlled, predictable way 
  - Deploy in multiple environments easily! 
  - Avoid configuration dri 
    - Avoid mistakes with manual configuration
      - Think of it as version control for your environments
        - **Important  Note**  -  Always  modify  the  resources  created  by Deployment Manager using Deployment Manager

318![ref48]

**Google Cloud Deployment Manager ![ref1]**

- All configuration is defined in a simple text file - YAML ![ref124]
  - I want a VPC, a subnet, a database and ... 
  - Deployment Manager understands dependencies 
    - Creates VPCs first, then subnets and then the database 
    - (Default) Automatic rollbacks on errors (Easier to retry) 
      - If creation of database fails, it would automatic delete the subnet and VPC
      - Version control your configuration file and make changes to it over time
        - Free to use - Pay only for the resources provisioned
          - Get an automated estimate for your configuration

319![ref48]

**Cloud Deployment Manager - Example ![ref1]**

- type: compute.v1.instance 

`  `name: my-first-vm 

`  `properties: 

`    `zone: us-central1-a 

`    `machineType: <<MACHINE\_TYPE>> 

`    `disks: 

- deviceName: boot 

`      `type: PERSISTENT 

`      `boot: true

`      `autoDelete: true 

`      `initializeParams: 

`        `sourceImage: <<SOURCE\_IMAGE>>     networkInterfaces: 

- network: <<NETWORK>> 

\# Give instance a public IP Address 

`      `accessConfigs: 

- name: External NAT 

`        `type: ONE\_TO\_ONE\_NAT 

320![ref48]

**Cloud Deployment Manager - Terminology ![ref1]**

- **Configuration** file: YAML file with resource definitions for a single deployment
  - **Templates**:  **Reusable  resource  definitions**  that  can  be  used  in  multiple configuration files
    - Can be defined using:
      - Python (preferred) OR
        - JinJa2 (recommended only for very simple scripts)
    - **Deployment**:  Collection  of  resources  that  are  deployed  and  managed together
      - **Manifests**:  Read-only  object  containing  original  deployment  configuration (including imported templates)
        - Generated by Deployment Manager
        - Includes fully-expanded resource list
          - Helpful for troubleshooting

321![ref48]

**Cloud Marketplace (Cloud Launcher) ![ref1]**

- Installing custom soware might involve setting up multiple resources:
  - Example: Installing WordPress needs set up of compute engine and a relational database
  - How do you simplify the set up of custom soware solutions like Wordpress or even more complex things like SAP HANA suite on GCP?
    - **Cloud Marketplace**: Central repo of easily deployable apps & datasets
      - Similar to **App Store/Play Store** for mobile applications
        - You can search and install a complete stack
          - Commercial solutions - SAP HANA etc
            - Open Source Packages - LAMP, WordPress, Cassandra, Jenkins etc ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.391.png) OS Licenses: BYOL, Free, Paid ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.392.png) Categories: Datasets/Developer tools/OS etc
          - When selecting a solution, you can see: ![ref125] Components - Soware, infrastructure needed etc ![ref125] Approximate price

322![ref48]

**Cloud DNS ![ref1]**

- What  would  be  the  **steps  in  setting  up  a  website**  with  a ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.394.png)domain name (for example, in28minutes.com)? 
  - **Step I** : Buy the domain name in28minutes.com (Domain Registrar) 
    - **Step II** : Setup your website content (Website Hosting) 
      - **Step III** : Route requests to in28minutes.com to the my website host server (DNS)
  - **Cloud DNS = Global Domain Name System** (Step III)
    - Setup your DNS routing for your website (in28minutes.com)
      - Route api.in28minutes.com to the IP address of api server
        - Route static.in28minutes.com to the IP address of http server
          - Route email (ranga@in28minutes.com) to the mail server(mail.in28minutes.com)
    - Public and private managed DNS zones (container for records)

323![ref48]

**Cloud DNS - CLI ![ref1]**

- gcloud **dns managed-zones** create ZONE\_NAME ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.395.png)
  - --description (REQUIRED - Short description for the managed-zone) 
    - --dns-name (REQUIRED - DNS name suffix that will be managed with the created zone) 
      - --visibility (private/**public**)
      - --networks (List of networks that the zone should be visible in if the zone visibility is [private])
  - Three Steps to add records to a managed zone:
    - Start Transaction for Zone
      - gcloud dns **record-sets transaction start** --zone
    - Make Changes
      - gcloud  dns  **record-sets  transaction  add**  --name=REC\_NAME  --ttl  --type  A/CNAME  -- zone=ZONE\_NAME
    - End Transaction for Zone
      - gcloud dns **record-sets transaction execute** --zone

324![ref48]

**Cloud Dataflow ![ref1]**

- **Cloud Dataflow** is a difficult service to describe: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.396.png)
  - Let's look at a **few example pipelines** you can build: 
    - Pub/Sub > Dataflow > BigQuery (Streaming) 
      - Pub/Sub > Dataflow > Cloud Storage (Streaming - files) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.397.png) Cloud  Storage  >  Dataflow  >  Bigtable/CloudSpanner/Datastore/BigQuery  (Batch  -  Load  data  into databases) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.398.png) Bulk compress files in Cloud Storage (Batch) ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.399.png) Convert file formats between Avro, Parquet & csv (Batch)
  - **Streaming and Batch Usecases**
    - Realtime  Fraud  Detection,  Sensor  Data  Processing,  Log  Data  Processing,  Batch Processing (Load data, convert formats etc)
    - Use **pre-built** templates
      - Based on **Apache Beam** (supports Java, Python, Go ...)
        - Serverless (and Autoscaling)

325![ref48]

**Cloud Dataproc ![ref1]**

- Managed **Spark and Hadoop** service: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.400.png)
  - Variety of jobs are supported: ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.401.png) Spark, PySpark, SparkR, Hive, SparkSQL, Pig, Hadoop 
  - Perform complex batch processing 
  - **Multiple Cluster Modes**:
    - Single Node / Standard/ High Availability (3 masters)
      - Use regular/preemptible VMs
    - Use case: Move your Hadoop and Spark clusters to the cloud
      - Perform your machine learning and AI development using open source frameworks
      - (REMEMBER) Cloud Dataproc is a data analysis platform
        - You can export cluster configuration but NOT data
        - (ALTERNATIVE) BigQuery - When you run SQL queries on Petabytes
          - Go for Cloud Dataproc when you need more than queries (Example: Complex batch processing Machine Learning and AI workloads)

326![ref48]

**Get Ready![ref1]**

327![ref48]

**Certification Resources ![ref1]**

**Title Link![ref126]**

**Home Page [https://cloud.google.com/certification/cloud-engineer**](https://cloud.google.com/certification/cloud-engineer)![ref127]**

**Exam Guide [https://cloud.google.com/certification/guides/cloud-engineer**](https://cloud.google.com/certification/guides/cloud-engineer)![ref126]**

**Sample Questions [https://cloud.google.com/certification/sample-questions/cloud-engineer ](https://cloud.google.com/certification/sample-questions/cloud-engineer)![ref127]Registering For Exam [https://support.google.com/cloud-certification/#topic=9433215**](https://support.google.com/cloud-certification/#topic=9433215)![ref126]**

328![ref48]

**Certification Exam ![ref1]**

- **50 questions** and **Two hours**
  - **No penalty** for wrong answers
    - **Questions**:
      - Type 1 : Multiple Choice - 4 options and 1 right answer
        - Type 2 : Multiple Select - 5 options and 2 right answers
      - Result immediately shown aer exam completion
        - Email (a couple of days later)
          - **My Recommendations**:
            - Read the **entire question ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.404.png)** Identify and write down the **key parts of the question**
            - Read **all answers** at least once ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.405.png) If you do NOT know the answer, **eliminate wrong answers** first
            - **Flag questions** for future consideration and review them before final submission

329![ref48]

**You are all set!![ref1]**

330![ref48]

**Let's clap for you! ![ref1]**

- You have a lot of patience! **Congratulations**
  - You have put your best foot forward to be an Google Cloud Certified Associate Cloud Engineer
    - Make sure you prepare well
      - Good Luck!

331![ref48]

**Do Not Forget! ![ref1]**

- Recommend the course to your friends!
  - **Do not forget to review**!
  - **Your Success = My Success**
    - Share your success story with me on LinkedIn (Ranga Karanam)
      - Share your success story and lessons learnt in Q&A with other learners!

332![ref48]

**What next? ![ref1]**

- Go Deeper into AWS! ![ref98]
  - Three things I would recommend 
    - Serverless (Lambda, API Gateway DynamoDB) 
      - Elastic Beanstalk ![](Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.406.png) ECS ![ref100]
  - Learn other Cloud Platforms: 
    - Gartner predicts a multi cloud world soon 
      - Get certified on AWS, Azure and Google Cloud 
    - Learn DevOps (Containers and Container Orchestration) ![ref101]
      - Learn Full Stack Development 

333![ref48]


[ref1]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.001.png
[ref2]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.004.png
[ref3]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.005.png
[ref4]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.006.png
[ref5]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.007.png
[ref6]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.008.png
[ref7]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.009.png
[ref8]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.010.png
[ref9]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.013.png
[ref10]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.014.png
[ref11]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.015.png
[ref12]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.025.png
[ref13]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.028.png
[ref14]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.030.png
[ref15]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.033.png
[ref16]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.034.png
[ref17]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.035.png
[ref18]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.036.png
[ref19]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.038.png
[ref20]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.045.png
[ref21]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.046.png
[ref22]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.047.png
[ref23]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.048.png
[ref24]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.050.png
[ref25]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.053.png
[ref26]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.061.png
[ref27]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.066.jpeg
[ref28]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.078.png
[ref29]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.079.png
[ref30]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.082.png
[ref31]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.083.png
[ref32]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.084.png
[ref33]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.086.png
[ref34]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.088.png
[ref35]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.090.png
[ref36]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.096.png
[ref37]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.098.jpeg
[ref38]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.100.png
[ref39]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.101.png
[ref40]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.103.png
[ref41]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.105.png
[ref42]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.109.png
[ref43]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.111.png
[ref44]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.112.png
[ref45]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.113.png
[ref46]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.114.png
[ref47]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.118.png
[ref48]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.122.png
[ref49]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.125.png
[ref50]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.133.png
[ref51]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.134.png
[ref52]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.136.png
[ref53]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.138.png
[ref54]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.139.png
[ref55]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.141.png
[ref56]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.142.png
[ref57]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.150.png
[ref58]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.151.png
[ref59]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.152.png
[ref60]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.154.png
[ref61]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.157.png
[ref62]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.162.png
[ref63]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.172.png
[ref64]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.179.png
[ref65]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.180.png
[ref66]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.192.png
[ref67]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.193.png
[ref68]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.194.png
[ref69]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.195.png
[ref70]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.196.png
[ref71]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.197.png
[ref72]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.198.png
[ref73]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.200.png
[ref74]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.201.png
[ref75]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.202.png
[ref76]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.203.png
[ref77]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.204.png
[ref78]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.219.png
[ref79]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.224.png
[ref80]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.228.png
[ref81]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.230.png
[ref82]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.234.png
[ref83]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.235.png
[ref84]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.238.png
[ref85]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.239.png
[ref86]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.241.png
[ref87]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.250.png
[ref88]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.258.png
[ref89]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.271.png
[ref90]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.272.png
[ref91]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.275.png
[ref92]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.276.png
[ref93]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.278.png
[ref94]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.282.png
[ref95]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.283.png
[ref96]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.284.png
[ref97]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.286.png
[ref98]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.293.png
[ref99]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.294.png
[ref100]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.295.png
[ref101]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.296.png
[ref102]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.299.png
[ref103]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.302.png
[ref104]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.303.png
[ref105]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.306.png
[ref106]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.308.png
[ref107]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.311.png
[ref108]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.317.png
[ref109]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.337.png
[ref110]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.341.png
[ref111]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.352.png
[ref112]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.355.png
[ref113]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.359.png
[ref114]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.360.png
[ref115]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.371.png
[ref116]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.372.png
[ref117]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.373.png
[ref118]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.377.png
[ref119]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.378.png
[ref120]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.381.png
[ref121]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.382.png
[ref122]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.386.png
[ref123]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.388.png
[ref124]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.390.png
[ref125]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.393.png
[ref126]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.402.png
[ref127]: Aspose.Words.6d1116e7-37c9-47f7-8625-ceb1e377a2b2.403.png
