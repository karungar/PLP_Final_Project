// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { authAPI, adminAPI } from '@/services/api';

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle
// } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// import {
//   Users,
//   Briefcase,
//   BarChart2,
//   ShieldCheck,
//   UserPlus,
//   UserMinus,
//   Building,
//   GraduationCap,
//   Settings,
//   AlertTriangle,
//   TrendingUp
// } from 'lucide-react';

// export const AdminDashboard = () => {
//   const [user, setUser] = useState(null);
//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     totalStudents: 0,
//     totalEmployers: 0,
//     totalJobs: 0,
//     activeJobs: 0,
//     totalApplications: 0
//   });
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await authAPI.getCurrentUser();
//         setUser(response.data);
//       } catch (error) {
//         console.error('Error fetching user:', error);
//       }
//     };

//     fetchUser();
//     fetchStats();
//     fetchUsers();
//   }, []);

//   const fetchStats = async () => {
//     try {
//       const response = await adminAPI.getStats();
//       setStats(response.data);
//     } catch (error) {
//       console.error('Error fetching stats:', error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await adminAPI.getUsers();
//       setUsers(response.data.slice(0, 5));
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleToggleUserStatus = async (userId) => {
//     try {
//       await adminAPI.toggleUserStatus(userId);
//       fetchUsers();
//     } catch (error) {
//       console.error('Error toggling user status:', error);
//     }
//   };

//   const getRoleColor = (role) => {
//     switch (role) {
//       case 'student':
//         return 'bg-blue-100 text-blue-800';
//       case 'employer':
//         return 'bg-green-100 text-green-800';
//       case 'admin':
//         return 'bg-purple-100 text-purple-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getRoleIcon = (role) => {
//     switch (role) {
//       case 'student':
//         return <GraduationCap className="w-4 h-4" />;
//       case 'employer':
//         return <Building className="w-4 h-4" />;
//       case 'admin':
//         return <ShieldCheck className="w-4 h-4" />;
//       default:
//         return <Users className="w-4 h-4" />;
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
//         <p className="text-gray-600 mt-2">Monitor and manage the platform.</p>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
//         <StatCard label="Total Users" value={stats.totalUsers} Icon={Users} color="text-blue-600" bg="bg-blue-100" />
//         <StatCard label="Students" value={stats.totalStudents} Icon={GraduationCap} color="text-green-600" bg="bg-green-100" />
//         <StatCard label="Employers" value={stats.totalEmployers} Icon={Building} color="text-purple-600" bg="bg-purple-100" />
//         <StatCard label="Total Jobs" value={stats.totalJobs} Icon={Briefcase} color="text-orange-600" bg="bg-orange-100" />
//         <StatCard label="Active Jobs" value={stats.activeJobs} Icon={TrendingUp} color="text-emerald-600" bg="bg-emerald-100" />
//         <StatCard label="Applications" value={stats.totalApplications} Icon={BarChart2} color="text-red-600" bg="bg-red-100" />
//       </div>

//       {/* Quick Actions */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//         <QuickActionCard
//           title="Manage Users"
//           Icon={Users}
//           description="View and manage all platform users"
//           buttonLabel="View All Users"
//           onClick={() => navigate('/admin/users')}
//         />
//         <QuickActionCard
//           title="Job Management"
//           Icon={Briefcase}
//           description="Oversee all job postings and applications"
//           buttonLabel="Manage Jobs"
//           onClick={() => navigate('/admin/jobs')}
//           variant="outline"
//         />
//         <QuickActionCard
//           title="Analytics"
//           Icon={BarChart2}
//           description="Platform analytics and reporting"
//           buttonLabel="View Analytics"
//           onClick={() => navigate('/admin/analytics')}
//           variant="outline"
//         />
//         <QuickActionCard
//           title="System Settings"
//           Icon={Settings}
//           description="Configure platform settings"
//           buttonLabel="Settings"
//           onClick={() => navigate('/admin/settings')}
//           variant="outline"
//         />
//       </div>

//       {/* Recent Users & System Health */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Card>
//           <CardHeader className="flex justify-between items-center">
//             <div>
//               <CardTitle>Recent Users</CardTitle>
//               <CardDescription>Newly registered users</CardDescription>
//             </div>
//             <Button onClick={() => navigate('/admin/users')} variant="outline" size="sm">
//               View All
//             </Button>
//           </CardHeader>
//           <CardContent>
//             {loading ? (
//               <div className="flex justify-center py-8">
//                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//               </div>
//             ) : users.length === 0 ? (
//               <div className="text-center py-8">
//                 <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                 <p className="text-gray-500">No users found</p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {users.map((user) => (
//                   <div key={user._id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
//                         <span className="text-white text-sm font-medium">
//                           {user.name.charAt(0).toUpperCase()}
//                         </span>
//                       </div>
//                       <div>
//                         <h3 className="font-medium text-gray-900">{user.name}</h3>
//                         <p className="text-sm text-gray-600">{user.email}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Badge variant="outline" className={getRoleColor(user.role)}>
//                         <span className="flex items-center gap-1">
//                           {getRoleIcon(user.role)}
//                           {user.role}
//                         </span>
//                       </Badge>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => handleToggleUserStatus(user._id)}
//                       >
//                         {user.isActive ? (
//                           <UserPlus className="w-4 h-4 text-green-600" />
//                         ) : (
//                           <UserMinus className="w-4 h-4 text-red-600" />
//                         )}
//                       </Button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>System Health</CardTitle>
//             <CardDescription>Platform status and alerts</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <SystemHealthCard
//               icon={<ShieldCheck className="w-4 h-4 text-green-600" />}
//               title="System Online"
//               subtitle="All services operational"
//               badgeText="Healthy"
//               badgeColor="bg-green-100 text-green-800"
//               bgColor="bg-green-50 border border-green-200"
//             />
//             <SystemHealthCard
//               icon={<BarChart2 className="w-4 h-4 text-blue-600" />}
//               title="Database"
//               subtitle="Connection stable"
//               badgeText="Active"
//               badgeColor="bg-blue-100 text-blue-800"
//               bgColor="bg-blue-50 border border-blue-200"
//             />
//             <SystemHealthCard
//               icon={<AlertTriangle className="w-4 h-4 text-yellow-600" />}
//               title="Maintenance"
//               subtitle="Scheduled for tonight"
//               badgeText="Scheduled"
//               badgeColor="bg-yellow-100 text-yellow-800"
//               bgColor="bg-yellow-50 border border-yellow-200"
//             />
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// // Reusable StatCard
// const StatCard = ({ label, value, Icon, color, bg }) => (
//   <Card className="hover:shadow-md transition-shadow">
//     <CardContent className="p-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-sm font-medium text-gray-600">{label}</p>
//           <p className="text-2xl font-bold text-gray-900">{value}</p>
//         </div>
//         <div className={`p-3 rounded-full ${bg}`}>
//           <Icon className={`w-6 h-6 ${color}`} />
//         </div>
//       </div>
//     </CardContent>
//   </Card>
// );

// // Reusable QuickActionCard
// const QuickActionCard = ({ title, description, Icon, buttonLabel, onClick, variant = "default" }) => (
//   <Card className="hover:shadow-md transition-shadow">
//     <CardHeader>
//       <CardTitle className="flex items-center gap-2">
//         <Icon className="w-5 h-5" />
//         {title}
//       </CardTitle>
//       <CardDescription>{description}</CardDescription>
//     </CardHeader>
//     <CardContent>
//       <Button onClick={onClick} className="w-full" variant={variant}>
//         {buttonLabel}
//       </Button>
//     </CardContent>
//   </Card>
// );

// // Reusable SystemHealthCard
// const SystemHealthCard = ({ icon, title, subtitle, badgeText, badgeColor, bgColor }) => (
//   <div className={`flex items-center justify-between p-3 rounded-lg ${bgColor}`}>
//     <div className="flex items-center gap-3">
//       <div className="p-2 rounded-full bg-opacity-10">{icon}</div>
//       <div>
//         <p className="font-medium">{title}</p>
//         <p className="text-sm text-muted-foreground">{subtitle}</p>
//       </div>
//     </div>
//     <Badge variant="outline" className={badgeColor}>
//       {badgeText}
//     </Badge>
//   </div>
// );
