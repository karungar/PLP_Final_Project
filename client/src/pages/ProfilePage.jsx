import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '@/services/api';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {CheckCircleIcon} from '@heroicons/react/24/outline';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profile: {
      phone: '',
      location: { country: 'Kenya', city: '' },
      skills: [],
      experience: '',
      education: '',
      languageLevel: '',
      interestedFields: [],
      availability: ''
    }
  });
  const [newSkill, setNewSkill] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const res = await authAPI.getProfile();
      const fetchedUser = res.data;
      setUser(fetchedUser);

      setFormData({
        name: fetchedUser.name || '',
        email: fetchedUser.email || '',
        profile: {
          phone: fetchedUser.profile?.phone || '',
          location: {
            country: fetchedUser.profile?.location?.country || 'Kenya',
            city: fetchedUser.profile?.location?.city || ''
          },
          skills: fetchedUser.profile?.skills || [],
          experience: fetchedUser.profile?.experience || '',
          education: fetchedUser.profile?.education || '',
          languageLevel: fetchedUser.profile?.languageLevel || '',
          interestedFields: fetchedUser.profile?.interestedFields || [],
          availability: fetchedUser.profile?.availability || ''
        }
      });
    } catch (err) {
      console.error('Failed to load profile:', err);
      localStorage.removeItem('token');
      navigate('/login');
    } finally {
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        profile: {
          ...prev.profile,
          [parent]: {
            ...prev.profile[parent],
            [child]: value
          }
        }
      }));
    } else if (field.startsWith('profile.')) {
      const profileField = field.replace('profile.', '');
      setFormData(prev => ({
        ...prev,
        profile: {
          ...prev.profile,
          [profileField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.profile.skills.includes(newSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        profile: {
          ...prev.profile,
          skills: [...prev.profile.skills, newSkill.trim()]
        }
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        skills: prev.profile.skills.filter(skill => skill !== skillToRemove)
      }
    }));
  };

  const toggleInterestedField = (field) => {
    setFormData(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        interestedFields: prev.profile.interestedFields.includes(field)
          ? prev.profile.interestedFields.filter(f => f !== field)
          : [...prev.profile.interestedFields, field]
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await authAPI.updateProfile({
        name: formData.name,
        profile: formData.profile
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const interestedFieldOptions = [
    'IT', 'Hospitality', 'Care Services', 'Language Schools',
    'Graduate Studies', 'Undergraduate Studies'
  ];

  if (initialLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner className="h-10 w-10" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
        <p className="text-gray-600 mt-2">Keep your profile up to date to get the best job matches.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {success && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircleIcon className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Profile updated successfully!
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input value={formData.name} onChange={(e) => handleChange('name', e.target.value)} />
          </div>

          <div>
            <Label>Email</Label>
            <Input value={formData.email} disabled />
          </div>

          <div>
            <Label>Phone</Label>
            <Input value={formData.profile.phone} onChange={(e) => handleChange('profile.phone', e.target.value)} />
          </div>

          <div>
            <Label>City</Label>
            <Input value={formData.profile.location.city} onChange={(e) => handleChange('location.city', e.target.value)} />
          </div>

          <div>
            <Label>Language Level</Label>
            <Input value={formData.profile.languageLevel} onChange={(e) => handleChange('profile.languageLevel', e.target.value)} />
          </div>

          <div>
            <Label>Experience</Label>
            <Textarea value={formData.profile.experience} onChange={(e) => handleChange('profile.experience', e.target.value)} />
          </div>

          <div>
            <Label>Education</Label>
            <Textarea value={formData.profile.education} onChange={(e) => handleChange('profile.education', e.target.value)} />
          </div>

          <div>
            <Label>Skills</Label>
            <div className="flex gap-2">
              <Input value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Add a skill" />
              <Button type="button" onClick={addSkill} variant="outline">Add</Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.profile.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill} <button type="button" onClick={() => removeSkill(skill)} className="ml-1 text-red-500">&times;</button>
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <Label>Interested Fields</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {interestedFieldOptions.map((field) => (
                <Badge
                  key={field}
                  variant={formData.profile.interestedFields.includes(field) ? 'default' : 'secondary'}
                  onClick={() => toggleInterestedField(field)}
                  className="cursor-pointer"
                >
                  {field}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Save Changes'}
        </Button>
      </form>
    </div>
  );
};
